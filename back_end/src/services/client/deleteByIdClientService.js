const { Client } = require('../../models');

const deleteByIdClientService = async ({ id }) => {
  const clientExist = await Client.findByPk(id);
  if (!clientExist) return null;

  const deleteClient = await Client.destroy({ where: { id }});
  
  return deleteClient;
};

module.exports = deleteByIdClientService;