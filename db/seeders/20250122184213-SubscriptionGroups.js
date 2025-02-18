"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "SubscriptionGroups",
      [
        { name: "Азия" },
        { name: "Турция, Египет, ОАЭ" },
        { name: "Россия и СНГ" },
        { name: "Африка, Лат. Америка" },
        { name: "Праздники" },
        { name: "Европа" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /** await queryInterface.bulkDelete('People', null, {}); */
  },
};
