const create = require('./createClientController');
const getAll = require('./getAllClientController');
const getById = require('./getByIdClientController');
const update = require('./updateClientController');
const deleteById = require('./deleteByIdClientController');

module.exports = { create, getAll, getById, update, deleteById };