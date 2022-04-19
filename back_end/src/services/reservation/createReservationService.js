const { Reservation } = require('../../models');

const createReservationService = async ({ checkIn, quantityDays, totalPrice, clientId }) => {
  const result = await Reservation.create({ checkIn, quantityDays, totalPrice, clientId });

  return result;
};

module.exports = createReservationService;
