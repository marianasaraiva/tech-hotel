const reservationService = require('../../services/reservation');

const deleteByIdClientController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await reservationService.deleteById({ id });

    if (!result) return res.status(404).json({ message: 'Reservation does not exist' });

    return res.status(200).json({ message: 'Reservation deleted successfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteByIdClientController;