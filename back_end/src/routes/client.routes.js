const clientRoute = require('express').Router();
const clientController = require('../controllers/client');


clientRoute.route('/')
  .get(clientController.getAll)
  .post(clientController.create);
  
clientRoute.route('/:id')
  .get()
  .put()
  .delete();

module.exports = clientRoute;