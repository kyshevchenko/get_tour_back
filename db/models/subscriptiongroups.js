"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubscriptionGroups extends Model {
    static associate(models) {
      this.hasMany(models.Subscription, { foreignKey: "subscriptionGroupId" });
    }
  }
  SubscriptionGroups.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SubscriptionGroups",
    }
  );
  return SubscriptionGroups;
};
