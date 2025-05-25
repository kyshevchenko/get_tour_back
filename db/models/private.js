"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Privat extends Model {
    static associate(models) {}
  }
  Privat.init(
    {
      channelId: DataTypes.BIGINT,
      keywords: DataTypes.STRING,
      recipients: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Privat",
    }
  );
  return Privat;
};
