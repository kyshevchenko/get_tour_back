'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Subscriptions",
      [
        {
          name: 'Индия',
          keywords: 'гоа, индия, индию, индии, дели',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Шри-Ланка',
          keywords: 'шри-ланка, шри-ланку, шри-ланке, коломбо',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Япония',
          keywords: 'япония, японию, японии, токио, сибуя, осака, киото, хиросима, нагоя, сакура',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Новый год',
          keywords: 'новый год, нового года, новогодний, новогодние, новогодних, новым годом, захватом нового, захватом НГ',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Майские праздники',
          keywords: 'майские, захватом майских',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Египет',
          keywords: 'египет, египте, хургада, каир, шарм-эль-шейх',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Бали',
          keywords: 'бали',
          isCustom: false,
          isActive: true,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
