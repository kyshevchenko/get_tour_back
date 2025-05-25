const { somethingWrongMessage } = require("../constants/messages.js");

const router = require("express").Router();
const { Privat } = require("../../db/models/index.js");

router.get("/", async (req, res) => {
  try {
    const privateData = await Privat.findAll();

    const privateResult = privateData.reduce((result, item) => {
      const pureId = BigInt(String(item.channelId).replace(/^-100/, ""));

      // console.log("item.channelId): ", item.channelId); TODO: remove, used for debug
      // console.log("ipureId: ", pureId);

      result[pureId] = {
        keywords: item.keywords.split(", "),
        recipients: item.recipients.split(", ").map(Number),
      };
      return result;
    }, {});

    res.json(privateResult);
  } catch (error) {
    res.status(500).json({
      error: somethingWrongMessage,
    });
  }
});

module.exports = router;
