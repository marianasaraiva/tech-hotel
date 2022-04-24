const { Reservation, ReservationRoom } = require('../../models');

const createReservationService = async ({ checkIn, checkOut, quantityDays, totalPrice, clientId, roomId }) => {
  const result = await Reservation.create({ checkIn, checkOut, quantityDays, totalPrice, clientId });

  await ReservationRoom.create({ reservationId: result.id, roomId });

  return result;
};

module.exports = createReservationService;
