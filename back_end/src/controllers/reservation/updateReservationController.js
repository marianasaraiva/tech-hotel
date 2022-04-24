const reservationService = require('../../services/reservation');

const updateReservationController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { checkIn, checkOut, quantityDays, totalPrice } = req.body;

    const { id: clientId } = req.user; 
    
    const result = await reservationService.update({  id, checkIn, checkOut, quantityDays, totalPrice, clientId });

    if (result === 0) return res.status(404).json({ message: 'Reservation is already updated' });

    if (!result) return res.status(404).json({ message: 'Reservation does not exist' });

    return res.status(200).json({ message: 'Reservation registered successfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = updateReservationController;