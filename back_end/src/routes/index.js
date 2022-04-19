const router = require('express').Router();

const clientRouter = require('./client.routes');
const reservationRouter = require('./reservation.routes');
const loginRouter = require('./login.routes');
const roomRouter = require('./room.routes');

router.use('/client', clientRouter);
router.use('/reservation', reservationRouter);
router.use('/login', loginRouter);
router.use('/room', roomRouter);

module.exports = router;
