const { Reservation, ReservationRoom } = require('../../models');

const createReservationService = async ({ checkIn, quantityDays, totalPrice, clientId, roomId }) => {
  const result = await Reservation.create({ checkIn, quantityDays, totalPrice, clientId });

  await ReservationRoom.create({ reservationId: result.id, roomId });

  return result;
};

module.exports = createReservationService;
