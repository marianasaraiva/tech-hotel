const create = require('./createClientService');
const getAll = require('./getAllClientService');
const getById = require('./getByIdClientService');
const update = require('./uptadeClientService');
const deleteById = require('./deleteByIdClientService');

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById
};