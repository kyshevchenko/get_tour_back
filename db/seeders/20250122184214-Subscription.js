"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Subscriptions",
      [
        {
          name: "Турция",
          keywords: "турци, турецки, стамбул, аланья, аланью, анталья, анталью, кемер, мармарис",
          subscriptionGroupId: 2,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Индия",
          keywords: "гоа, индия, индию, индии, индий, дели",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Китай",
          keywords: "китай, китае, хайнань",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Шри-Ланка",
          keywords: "шри-ланк, коломбо",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Япония",
          keywords:
            "япони, токио, сибуя, осака, осаке, осаку, киото, хиросима, нагоя, сакура",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "ОАЭ",
          keywords: "оаэ, дубай, дубае, эмират, шарджа, шардже",
          subscriptionGroupId: 2,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Египет",
          keywords: "египет, египте, хургада, каир, шарм-эль-шейх",
          subscriptionGroupId: 2,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Бали",
          keywords: "бали, денпасар, индонезия",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Таиланд",
          keywords:
            "таиланд, тайск, пхукет, панган, бангкок, паттай, патайя, пхи-пхи, самуи, краби",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Вьетнам",
          keywords: "вьетнам, нячанг, муйне, фантьет, хошимин, дананг, фукуок",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Южная Корея",
          keywords: "южная корея, южной корее, южную корею, пусан, сеул",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Сингапур",
          keywords: "сингапур, чанги",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Сочи",
          keywords:
            "сочи, роза-хутор, адлер, красная поляна, красную поляну, красной поляне",
            subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Шерегеш",
          keywords: "шерегеш",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Казахстан",
          keywords: "казахстан, казахск, алматы, астана",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Узбекистан",
          keywords: "узбекистан, узбекск, самарканд, ургенч, наманган, фергана",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Киргизия",
          keywords: "киргизия, киргизск, бишкек",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Армения",
          keywords: "армения, армянск",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Азербайджан",
          keywords: "азербайджан, баку",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Молдавия",
          keywords: "молдавия, кишинев, кишенёв",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Грузия",
          keywords: "грузия, грузию, грузинск, тбилиси, батуми",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Танзания",
          keywords:
            "Танзания",
            subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Маврикий",
          keywords:
            "маврикий",
            subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Занзибар",
          keywords:
            "занзибар",
            subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Новый год",
          keywords:
            "новый год, нового года, новогод, новым годом, захватом нового, захватом НГ",
            subscriptionGroupId: 5,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Майские праздники",
          keywords: "майские, захватом майских",
          subscriptionGroupId: 5,
          isCustom: false,
          isActive: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /** await queryInterface.bulkDelete('People', null, {}); */
  },
};
