const reservationRouter = require('express').Router();
const reservationController = require('../controllers/reservation');
const auth = require('../middlewares/auth');
const validationReservation = require('../middlewares/reservation');

reservationRouter.route('/')
  .get(reservationController.getAll)
  .post(validationReservation, auth, reservationController.create);
  
reservationRouter.route('/:id')
  .get(auth, reservationController.getById)
  .put()
  .delete();

module.exports = reservationRouter;
