const clientRouter = require('express').Router();
const loginController = require('../controllers/login/loginController');
const isValidLogin = require('../middlewares/login');

clientRouter.route('/')
  .post(isValidLogin, loginController);

module.exports = clientRouter;
