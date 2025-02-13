"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {
      this.belongsTo(models.SubscriptionGroups, {
        foreignKey: "subscriptionGroupId",
      });
      this.hasMany(models.ChatSubscriptions, { foreignKey: "subscriptionId" });
    }
  }
  Subscription.init(
    {
      name: DataTypes.STRING,
      keywords: DataTypes.TEXT,
      subscriptionGroupId: DataTypes.INTEGER,
      isCustom: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Subscription",
    }
  );
  return Subscription;
};
