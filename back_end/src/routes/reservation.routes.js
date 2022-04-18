const reservationRouter = require('express').Router();
const reservationController = require('../controllers/reservation');

reservationRouter.route('/')
  .get()
  .post(reservationController.create);
  
reservationRouter.route('/:id')
  .get()
  .put()
  .delete();

module.exports = reservationRouter;
