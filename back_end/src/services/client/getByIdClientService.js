const { Client, Reservation, Room } = require('../../models');

const getByIdClientService = async (id) => {
  const result = await Client.findByPk(id, {
    include:
      [
        { model: Reservation, as: 'reservations' },
      ],
  });

  return result;
};

module.exports = getByIdClientService;