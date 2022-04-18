const router = require('express').Router();

const clientRouter = require('./client.routes');
const reservationRouter = require('./reservation.routes');

router.use('/client', clientRouter);
router.use('/reservation', reservationRouter);

module.exports = router;
