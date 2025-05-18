"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Subscriptions",
      [
        {
          name: "Турция",
          keywords:
            "турци, турецки, стамбул, алань, анталь, кемер, мармарис, белек, даламан",
          subscriptionGroupId: 2,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Индия",
          keywords: "гоа, индия, индию, индии, индий, дели, даболим",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Китай",
          keywords:
            "китай, китае, хайнань, шанхай, гонконг, гуанчжоу, пекин, санья",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Шри-Ланка",
          keywords: "шри-ланк, коломбо, маттала, хамбантота",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Япония",
          keywords:
            "япони, токио, сибуя, сибуе, осака, осаке, осаку, киото, хиросим, нагоя, сакур, фукуока",
          subscriptionGroupId: 1,
          isCustom: false,
          isActive: true,
        },
        {
          name: "ОАЭ",
          keywords: "оаэ, дубай, дубае, эмират, шардж, абу-",
          subscriptionGroupId: 2,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Египет",
          keywords: "египет, египт, хургад, каир, шарм-",
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
            "сочи, роза-хутор, адлер, красная поляна, красную поляну, красной поляне, красной поляны",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Шерегеш",
          keywords: "шерегеш, новокузнецк",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Казахстан",
          keywords:
            "казахстан, казахск, алматы, астана, караганда, шымкент, усть-каменогорск, уральск",
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
          keywords: "армения, армянск, ереван",
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
          keywords: "грузия, грузию, грузинск, тбилиси, батуми, кутаиси",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Калинград",
          keywords: "калининград",
          subscriptionGroupId: 3,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Танзания",
          keywords: "танзания",
          subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Маврикий",
          keywords: "маврикий",
          subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Занзибар",
          keywords: "занзибар",
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
        {
          name: "Германия",
          keywords:
            "германи, берлин, мюнхен, гамбург, франкфурт, штутгарт, кёльн",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Греция",
          keywords: "греци, афины, крит, родос, корфу, салоники",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Испания",
          keywords: "испани, мадрид, барселон, валенси, севиль, марбель",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Италия",
          keywords:
            "итали, рим, милан, венеци, флоренци, неапол, турин, сицили",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Польша",
          keywords: "польш, варшав, краков",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Франция",
          keywords: "франци, париж, марсел, ницц",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Хорватия",
          keywords: "хорвати, загреб, дубровник",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Черногория",
          keywords: "черногори, подгориц, будв, герцег-нови, тиват",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Чехия",
          keywords: "чехия, чехию, чехии, прага, прагу, праге",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Швеция",
          keywords: "швеци, стокгольм, гётеборг, мальм",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Нидерланды",
          keywords: "нидерланд, амстердам, роттердам, гааг",
          subscriptionGroupId: 6,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Бразилия",
          keywords: "бразили, бразильск, рио-де-жанейро, сан-паулу",
          subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Аргентина",
          keywords: "аргентин, буэнос-айрес, мендоса",
          subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Мексика",
          keywords: "мексик, мексиканск, мехико, канкун",
          subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Чили",
          keywords: "чили, чилийск, сантьяго",
          subscriptionGroupId: 4,
          isCustom: false,
          isActive: true,
        },
        {
          name: "Колумбия",
          keywords: "колумби, колумбийск, богот, картахен",
          subscriptionGroupId: 4,
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
