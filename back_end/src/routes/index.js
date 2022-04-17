const express = require('express');

const clientRoute = require('./client.routes');

const router = express.Router();

router.use('/client', clientRoute);

module.exports = router;


