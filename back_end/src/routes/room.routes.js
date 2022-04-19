const roomRouter = require('express').Router();
const roomController = require('../controllers/room');

roomRouter.route('/')
  .get(roomController.getAll);

module.exports = roomRouter;