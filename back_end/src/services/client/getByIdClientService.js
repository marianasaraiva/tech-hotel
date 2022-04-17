const { Client } = require('../../models');

const getByIdClientService = async (id) => {
  const result = await Client.findByPk(id);

  return result;
};

module.exports = getByIdClientService;