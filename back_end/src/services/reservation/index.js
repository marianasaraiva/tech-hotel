const create = require('./createReservationService');
const getAll = require('./getAllReservationService');
const getById = require('./getByIdReservationService');
const update = require('./updateReservationService');
const deleteById = require('./deleteByIdReservationService');

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById
};
