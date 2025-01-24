'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Subscriptions",
      [
        {
          name: 'Турция',
          keywords: 'турци, стамбул, аланья, анталья, кемер, мармарис',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Индия',
          keywords: 'гоа, индия, индию, индии, дели',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Шри-Ланка',
          keywords: 'шри-ланк, коломбо',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Япония',
          keywords: 'япони, токио, сибуя, осака, осаке, осаку, киото, хиросима, нагоя, сакура',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'АОЭ',
          keywords: 'оаэ, дубай, дубае, эмират, шарджа, шардже',
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
        {
          name: 'Таиланд',
          keywords: 'таиланд, пхукет, панган, бангкок, паттайя, патаяй, пхи-пхи, самуи, краби',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Сочи',
          keywords: 'сочи, роза-хутор, адлер, красная поляна',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Новый год',
          keywords: 'новый год, нового года, новогод, новым годом, захватом нового, захватом НГ',
          isCustom: false,
          isActive: true,
        },
        {
          name: 'Майские праздники',
          keywords: 'майские, захватом майских',
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
