const { Reservation } = require('../../models');

const updateReservationService = async ({ id, checkIn, checkOut, quantityDays, totalPrice, clientId }) => {
  const reservationExist = await Reservation.findByPk(id);
  
  if (!reservationExist) return null;

  const updateReservation = await Reservation
    .update({ checkIn, checkOut, quantityDays, totalPrice, clientId }, { where: { id }});
  
  return updateReservation[0];
};

module.exports = updateReservationService;