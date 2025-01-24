const router = require("express").Router();
const { Subscription } = require("../../db/models");

router.get("/all", async (req, res) => {
  const isCustom = false;
  try {
    const subsData = await Subscription.findAll({ where: { isCustom } });
    const result = subsData.map((sub) => sub.get({ plain: true }));

    let subs = [];
    let subIds = {};
    for (const sub in result) {
      subs.push(result[sub].name);

      subIds[result[sub].name] = result[sub].id;
    }

    res.json({ subs, subIds });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
