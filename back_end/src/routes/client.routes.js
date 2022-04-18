const clientRouter = require('express').Router();
const clientController = require('../controllers/client');
const validationClient = require('../middlewares/client');
const auth = require('../middlewares/auth');

clientRouter.route('/')
  .get(clientController.getAll)
  .post(validationClient, clientController.create);

clientRouter.route('/:id')
  .get(auth, clientController.getById)
  .put(validationClient, auth, clientController.update)
  .delete(auth, clientController.deleteById);

module.exports = clientRouter;
