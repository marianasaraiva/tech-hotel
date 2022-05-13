const { Op } = require('sequelize');
const { Client } = require('../../models');

const createClientService = async (client) => {
  const findClient = await Client.findOne({
    where: { [Op.or]: [{ email: client.email }, { cpf: client.cpf }] },
  });

  if (findClient) return 'Client already registered';

  const result = await Client.create(client);

  return result;
};

module.exports = createClientService;
