const router = require('express').Router();

const clientRoute = require('./client.routes');

router.use('/client', clientRoute);

module.exports = router;


