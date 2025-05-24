"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Private extends Model {
    static associate(models) {}
  }
  Private.init(
    {
      channelId: DataTypes.BIGINT,
      keywords: DataTypes.STRING,
      recipients: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Private",
    }
  );
  return Private;
};
