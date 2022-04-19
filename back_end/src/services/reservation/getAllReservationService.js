const { Reservation, Client, Room } = require('../../models');

const getAllReservationService = async () => {
  const reservation = await Reservation.findAll({
    include:
      [
        { model: Client, as: 'client', attributes: { exclude: 'password' } },
        { model: Room, as: 'rooms', through: { attributes: [] } }
      ],
  });

  return reservation;
};

module.exports = getAllReservationService;