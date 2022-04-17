const clientService = require('../../services/client');

const updateClientController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { fullName, cpf, email, password } = req.body;
    const result = await clientService.update({ id, fullName, cpf, email, password });

    if (result === 0) return res.status(404).json({ message: 'Client is already updated' });

    if (!result) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json({ message: 'Client registered successfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = updateClientController;