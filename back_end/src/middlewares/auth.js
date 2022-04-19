const validateToken = require('../helpers/validateToken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decoded = await validateToken(token);

  req.user = decoded.data.email;
  if (!decoded) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};