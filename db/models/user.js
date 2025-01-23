'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ChatSubscriptions, { foreignKey: 'ownerId' });
    }
  }
  User.init({
    telegramTag: DataTypes.STRING,
    telegramId: DataTypes.BIGINT,
    name: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};