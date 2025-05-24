const { somethingWrongMessage } = require("../constants/messages.js");

const router = require("express").Router();
const { Privat } = require("../../db/models/index.js");

router.get("/", async (req, res) => {
  try {
    const prevateData = await Privat.findAll();

    res.json(prevateData);
  } catch (error) {
    res.status(500).json({
      error: somethingWrongMessage,
    });
  }
});

module.exports = router;
