const { Reservation, Client, Room } = require('../../models');

const getByIdReservationService = async (id) => {
  const reservation = await Reservation.findByPk(id, {
    include:
      [
        { model: Client, as: 'client', attributes: { exclude: 'password' } },
        { model: Room, as: 'rooms', through: { attributes: [] } }
      ],
  });

  return reservation;
};

module.exports = getByIdReservationService;