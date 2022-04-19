const reservationService = require('../../services/reservation');

const createReservationController = async (req, res, next) => {
  try {
    const { id: clientId } = req.user;

    const { checkIn, quantityDays, totalPrice, roomId } = req.body;
    
    const result = await reservationService.create({ checkIn, quantityDays, totalPrice, clientId, roomId });
   
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = createReservationController;