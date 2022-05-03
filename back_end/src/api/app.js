const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const routes = require('../routes');

const error = require('../middlewares/error');

app.use(routes);

app.use(error);

module.exports = app;
