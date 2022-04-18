module.exports = (sequelize, _DataTypes) => {
  const ReservationRoom = sequelize.define('ReservationRoom',
    {},
    { timestamps: false, tableName: 'ReservationRooms' });

  ReservationRoom.associate = (models) => {
    models.Room.belongsToMany(models.Reservation, {
      as: 'reservations',
      through: ReservationRoom,
      foreignKey: 'roomId',
      otherKey: 'reservationId',
    });
    models.Reservation.belongsToMany(models.Room, {
      as: 'rooms',
      through: ReservationRoom,
      foreignKey: 'reservationId',
      otherKey: 'roomId',
    });
  };
  return ReservationRoom;
};
