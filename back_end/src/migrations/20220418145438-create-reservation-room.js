'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReservationRooms', {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Rooms',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      reservationId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Reservations',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReservationRooms');
  }
};