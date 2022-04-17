const { Client } = require('../../models');

const getByIdClientService = async (id) => {
  console.log('id', id);
  const result = await Client.findByPk(id);

  return result;
};

module.exports = getByIdClientService;