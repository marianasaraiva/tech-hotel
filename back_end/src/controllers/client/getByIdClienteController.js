const clientService = require('../../services/client');

const getByIdClientController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await clientService.getById(id);

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getByIdClientController;