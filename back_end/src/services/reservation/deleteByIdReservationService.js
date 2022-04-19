const { Reservation } = require('../../models');

const deleteByIdReservationService = async ({ id }) => {
  const ReservationExist = await Reservation.findByPk(id);
  
  if (!ReservationExist) return null;

  const deleteReservation = await Reservation.destroy({ where: { id }});
  
  return deleteReservation;
};

module.exports = deleteByIdReservationService;