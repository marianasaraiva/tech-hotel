const { Reservation, Client } = require('../../models');

const createReservationService = async ({ checkIn, quantityDays, totalPrice, email }) => {
  const user = await Client.findOne({ where: { email }});
  const result = await Reservation.create({ checkIn, quantityDays, totalPrice, clientId: user.id });

  return result;
};

module.exports = createReservationService;
