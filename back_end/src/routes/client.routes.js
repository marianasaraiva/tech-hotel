const clientRouter = require('express').Router();
const clientController = require('../controllers/client');
const validationClient = require('../middlewares/client');

clientRouter.route('/')
  .get(clientController.getAll)
  .post(validationClient, clientController.create);
  
clientRouter.route('/:id')
  .get(clientController.getById)
  .put(validationClient, clientController.update)
  .delete(clientController.deleteById);

module.exports = clientRouter;