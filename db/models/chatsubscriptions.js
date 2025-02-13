"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ChatSubscriptions extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "ownerId" });
      this.belongsTo(models.Subscription, { foreignKey: "subscriptionId" });
    }
  }
  ChatSubscriptions.init(
    {
      ownerId: DataTypes.INTEGER,
      chatId: DataTypes.BIGINT,
      subscriptionId: DataTypes.INTEGER,
      isChatBased: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ChatSubscriptions",
    }
  );

  // Хук для удаления связанных записей в Subscriptions
  ChatSubscriptions.beforeDestroy(async (chatSubscription, options) => {
    const subscription = await sequelize.models.Subscriptions.findByPk(
      chatSubscription.subscriptionId
    );
    if (subscription) {
      await subscription.destroy();
    }
  });

  return ChatSubscriptions;
};
