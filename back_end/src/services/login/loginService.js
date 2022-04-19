const { Client } = require('../../models');
const generationToken = require('../../helpers/generationToken');

const loginService = async ({ email, password }) => {  
  const client = await Client.findOne({ where: { email, password } });

  if (!client) return null;

  const token = generationToken({ email, id: client.id });

  return token;
};

module.exports = loginService;
