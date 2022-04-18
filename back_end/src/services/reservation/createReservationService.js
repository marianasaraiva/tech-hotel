const { Reservation } = require('../../models');

const createReservationService = async ({ checkIn, quantityDays, totalPrice }) => {
  const result = await Reservation.create({ checkIn, quantityDays, totalPrice, clientId: 1 });

  return result;
};

module.exports = createReservationService;
