const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.js')[env];

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const routes = require('./routes');

const error = require('./middlewares/error');

app.use(routes);

app.use(error);

app.listen(config.serverport || 3001, () => console.log('ouvindo porta 3001!'));
