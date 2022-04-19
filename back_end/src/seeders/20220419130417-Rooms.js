'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Rooms',
      [{
        id: 1,
        room: 301,
        type: 'Suíte Luxo',
        price: '700',
      },
      {
        id: 2,
        room: 302,
        type: 'Suíte Luxo',
        price: '700',
      },
      {
        id: 3,
        room: 303,
        type: 'Suíte Luxo',
        price: '700',
      },
      {
        id: 4,
        room: 201,
        type: 'Suíte Executiva',
        price: '500',
      },
      {
        id: 5,
        room: 202,
        type: 'Suíte Executiva',
        price: '500',
      },
      {
        id: 6,
        room: 203,
        type: 'Suíte Executiva',
        price: '500',
      },
      {
        id: 7,
        room: 101,
        type: 'Quarto Standard',
        price: '300',
      },
      {
        id: 8,
        room: 102,
        type: 'Quarto Standard',
        price: '300',
      },
      {
        id: 9,
        room: 103,
        type: 'Quarto Standard',
        price: '300',
      },
      ], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
