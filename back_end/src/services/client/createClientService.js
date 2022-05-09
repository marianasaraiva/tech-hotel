const Op = require('Sequelize').Op
const { Client } = require('../../models');

const createClientService = async (client) => {
  const findClient = await Client.findOne({
    where: { [Op.or]: [{ email: client.email }, { cpf: client.cpf }] },
  });
  // const findByCpf = await Client.findOne({ where: { cpf: client.cpf  } });

  if (findClient) return 'Client already registered';
  // if (findByCpf) return 'CPF already exists';

  const result = await Client.create(client);

  return result;
};

module.exports = createClientService;
