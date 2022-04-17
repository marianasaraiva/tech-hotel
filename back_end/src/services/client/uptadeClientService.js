const { Client } = require('../../models');


const updateClientService = async ({ id, fullName, cpf, email, password }) => {
  const clientExist = await Client.findByPk(id);
  
  if (!clientExist) return null;

  const updateClient = await Client.update({ fullName, cpf, email, password }, { where: { id }});
  console.log(updateClient);
  return updateClient[0];
};

module.exports = updateClientService;