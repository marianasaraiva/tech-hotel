const reservationService = require('../../services/reservation');

const createReservationController = async (req, res, next) => {
  try {
    const { checkIn, quantityDays, totalPrice } = req.body;

    const result = await reservationService.create({ checkIn, quantityDays, totalPrice });

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = createReservationController;