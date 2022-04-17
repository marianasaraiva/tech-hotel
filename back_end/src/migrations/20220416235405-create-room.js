'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      reservationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Reservations',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },   
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};