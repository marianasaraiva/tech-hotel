const clientRoute = require('express').Router();

clientRoute.route('/')
  .get()
  .post();
  
clientRoute.route('/:id')
  .get()
  .put()
  .delete();

module.exports = clientRoute;