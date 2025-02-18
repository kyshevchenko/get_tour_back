const { somethingWrongMessage } = require("../constants/messages.js");

const router = require("express").Router();
const { Subscription, SubscriptionGroups } = require("../../db/models");

router.get("/all", async (req, res) => {
  try {
    const subsData = await Subscription.findAll({
      include: [
        {
          model: SubscriptionGroups,
          required: true,
          attributes: ["name"],
        },
      ],
    });
    const result = subsData.map((sub) => sub.get({ plain: true }));

    let subInfo = {};
    for (const r of result) {
      const {
        name: subName,
        id,
        keywords,
        SubscriptionGroup: { name: groupName },
      } = r;

      if (!subInfo[groupName]) subInfo[groupName] = {};

      subInfo[groupName][subName] = {
        id,
        keywords,
      };
    }

    res.json(subInfo);
  } catch (error) {
    res.status(500).json({
      error: somethingWrongMessage,
    });
  }
});

module.exports = router;
