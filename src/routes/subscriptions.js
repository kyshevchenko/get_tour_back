const router = require("express").Router();
const { Subscription } = require("../../db/models");

router.get("/all", async (req, res) => {
  const isCustom = false;
  try {
    const subs = await Subscription.findAll({ where: { isCustom } });
    const result = subs.map((sub) => sub.get({ plain: true }));
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
