const reservationService = require('../../services/reservation');

const getAllReservationController = async (_req, res, next) => {
  try {
    const reservation = await reservationService.getAll();
    return res.status(200).json(reservation);
  } catch(error) {
    next(error);
  }
}

module.exports = getAllReservationController;