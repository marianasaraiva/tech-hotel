const clientService = require('../../services/client');

const deleteByIdClientController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await clientService.deleteById({ id });

    if (!result) return res.status(404).json({ message: 'Client does not exist' });

    return res.status(200).json({ message: 'Client deleted successfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteByIdClientController;