const clientService = require('../../services/client');

const createClientController = async (req, res, next) => {
  try {
    const result = await clientService.getAll();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = createClientController;