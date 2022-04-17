const { Client } = require('../../models');

const createClientService = async (client) => {
  const result = await Client.create(client);

  return result;
};

module.exports = createClientService;