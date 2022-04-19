const reservationService = require('../../services/reservation');

const getByIdReservationController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reservation = await reservationService.getById(id);
    return res.status(200).json(reservation);
  } catch(error) {
    next(error);
  }
}

module.exports = getByIdReservationController;