const router = require('express').Router();

const clientRouter = require('./client.routes');
const reservationRouter = require('./reservation.routes');
const loginRouter = require('./login.routes');

router.use('/client', clientRouter);
router.use('/reservation', reservationRouter);
router.use('/login', loginRouter);

module.exports = router;
