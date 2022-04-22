const loginService = require('../../services/login/loginService');

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const response = await loginService({ email, password });

    if (!response) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = loginController;