'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      checkIn: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantityDays: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Reservations');
  }
};