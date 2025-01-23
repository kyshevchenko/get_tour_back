'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ChatSubscriptions, { foreignKey: 'subscriptionId' });
    }
  }
  Subscription.init({
    name: DataTypes.STRING,
    keywords: DataTypes.TEXT,
    isCustom: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};