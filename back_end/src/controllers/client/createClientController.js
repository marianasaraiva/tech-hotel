const clientService = require('../../services/client');

const createClientController = async (req, res, next) => {
  try {
    const { fullName, cpf, password, email } = req.body;

    const result = await clientService.create({ fullName, cpf, password, email, active: true });

    if (result === 'E-mail already exists') return res
      .status(409).json({ message: result });

    if (result === 'CPF already exists') return res
      .status(409).json({ message: result });

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = createClientController;