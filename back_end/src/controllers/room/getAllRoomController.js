const roomService = require('../../services/room');

const getAllRoomController = async (_req, res, next) => {
  try {
    const room = await roomService.getAll();

    return res.status(200).json(room);
  } catch(error) {
    next(error);
  }
}

module.exports = getAllRoomController;