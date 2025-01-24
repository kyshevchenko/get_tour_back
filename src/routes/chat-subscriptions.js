const router = require("express").Router();
const { Op } = require("sequelize");
const { ChatSubscriptions, Subscription, User } = require("../../db/models");

// Получить список своих подписок
router.get("/my/:telegramId", async (req, res) => {
  const telegramId = Number(req.params.telegramId);

  try {
    const user = await User.findOne({ where: { telegramId } });
    if (!user) {
      res.json({ message: "У вас нет ни одной активной подписки." });
      return;
    }
    const ownerId = user?.dataValues?.id;

    const subsData = await ChatSubscriptions.findAll({ where: { ownerId } });
    if (!subsData) {
      res.json({ message: "У вас нет ни одной активной подписки." });
      return;
    }
    const subsIds = subsData.map((e) => e.get({ plain: true }).subscriptionId);
    console.log("subsIds -->", subsIds);

    const subsNamesData = await Subscription.findAll({
      where: {
        id: {
          [Op.in]: subsIds,
        },
      },
    });
    const subNames = subsNamesData.map((e) => e.name);

    res.json({ message: `Список активных подписок: ${subNames.join(", ")}.` });
  } catch (error) {
    console.log("error --->", error);
    res.status(500).json({
      error:
        "Что-то пошло не так... Попробуйте позже или обратитесь к разработчику.",
    });
  }
});

// Создание новой подписки
router.post("/new", async (req, res) => {
  const { telegramTag, telegramId, name, chatId, subName, subscriptionId } = req.body;

  try {
    // Проверяем есть ли пользователь в БД и создаем его
    let user = await User.findOne({ where: { telegramId } });
    let ownerId = user?.dataValues?.id;

    if (!user) {
      user = await User.create({
        telegramTag,
        telegramId,
        name,
        isActive: true,  // TODO сделать в миграциях значением по умолчанию
      });
      ownerId = user.dataValues.id;
    }

    // Проверяем есть ли подписка для запрошенного чат и создаем ее
    let chatSubscription = await ChatSubscriptions.findOne({
      where: {
        ownerId,
        subscriptionId,
      },
    });

    if (chatSubscription) {
      res.json({ message: `У вас уже активна подписка "${subName}"` });
      return;
    }

    if (!chatSubscription) {
      const isChatBased = telegramId !== chatId;

      chatSubscription = await ChatSubscriptions.create({
        ownerId,
        chatId,
        subscriptionId,
        isChatBased,
        isActive: true, // TODO сделать в миграциях значением по умолчанию
      });

      res.json({
        message: `Вы успешно подписались на уведомления по подписке "${subName}"`,
      });
    }
  } catch (error) {
    console.log("error --->", error);
    res.status(500).json({
      error:
        "Что-то пошло не так... Попробуйте позже или обратитесь к разработчику.",
    });
  }
});

// Удаление подписки
router.delete("/delete", async (req, res) => {
  const { telegramId, subscriptionId } = req.body;
  try {
    const user = await User.findOne({ where: { telegramId } });
    if (!user) {
      res.json({ message: "У вас нет ни одной активной подписки." });
      return;
    }
    const ownerId = user?.dataValues?.id;

    const deleteResult = await ChatSubscriptions.destroy({
      where: {
        ownerId,
        subscriptionId,
      },
    });

    const message = deleteResult > 0
      ? "Подписка была удалена."
      : "Подписка не является активной.\nЕсли вам приходят уведомления, проверьте список активных подписко с помощью компанды:\n/list";
    res.json({ message });
  } catch (error) {
    console.log("error --->", error); // TODO сохранять логи ошибок с датой и временем
    res.status(500).json({
      error:
        "Что-то пошло не так... Попробуйте позже или обратитесь к разработчику.", // TODO текст вынести в константы
    });
  }
});

module.exports = router;
