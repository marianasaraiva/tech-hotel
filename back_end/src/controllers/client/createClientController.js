const clientService = require('../../services/client');

const createClientController = async (req, res, next) => {
  try {
    const { fullName, cpf, password, email } = req.body;

    const result = await clientService.create({ fullName, cpf, password, email, active: true });

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = createClientController;