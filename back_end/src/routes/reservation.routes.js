const reservationRouter = require('express').Router();
const reservationController = require('../controllers/reservation');
const auth = require('../middlewares/auth');

reservationRouter.route('/')
  .get()
  .post(auth, reservationController.create);
  
reservationRouter.route('/:id')
  .get()
  .put()
  .delete();

module.exports = reservationRouter;
