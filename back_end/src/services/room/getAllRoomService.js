const { Reservation, Room } = require('../../models');

const getAllRoomService = async () => {
  const room = await Room.findAll({
    include:
      { model: Reservation, as: 'reservations', through: { attributes: [] } },
    });
    
  return room;
};

module.exports = getAllRoomService;