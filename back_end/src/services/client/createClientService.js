const { Client } = require('../../models');

const createClientService = async (client) => {
  const findByEmail = await Client.findOne({ where: { email: client.email  } });
  const findByCpf = await Client.findOne({ where: { cpf: client.cpf  } });

  if (findByEmail) return 'E-mail already exists';
  if (findByCpf) return 'CPF already exists';

  const result = await Client.create(client);

  return result;
};

module.exports = createClientService;