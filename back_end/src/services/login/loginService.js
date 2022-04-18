const { Client } = require('../../models');
const generationToken = require('../../utils/generationToken');

const loginService = async ({ email, password }) => {
  
  const client = await Client.findOne({ where: { email, password } });

  if (!client) return null;

  const token = generationToken({ email });

  return token;
};

module.exports = loginService;