const express = require('express');

const app = express();

app.use(express.json());

const routes = require('./routes');

const error = require('./middlewares/error');

app.use(routes);

app.use(error);

app.listen(process.env.PORT || 3001, () => console.log('ouvindo porta 3001!'));
