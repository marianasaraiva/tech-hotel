const { Client } = require('../../models');

const getAllClientService = async (client) => {
  const result = await Client.findAll(client);

  return result;
};

module.exports = getAllClientService;