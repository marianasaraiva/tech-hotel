const create = require('./createReservationController');
const getAll = require('./getAllReservationController');
const getById = require('./getByIdReservationController');
const update = require('./updateReservationController');
const deleteById = require('./deleteByIdReservationController');

module.exports = { create, getAll, getById, update, deleteById };
