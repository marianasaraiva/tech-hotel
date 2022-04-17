const clientRoute = require('express').Router();
const clientController = require('../controllers/client');
const validationClient = require('../middlewares/client');

clientRoute.route('/')
  .get(clientController.getAll)
  .post(validationClient, clientController.create);
  
clientRoute.route('/:id')
  .get(clientController.getById)
  .put(validationClient, clientController.update)
  .delete(clientController.deleteById);

module.exports = clientRoute;