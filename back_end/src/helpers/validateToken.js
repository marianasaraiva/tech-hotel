const jwt = require('jsonwebtoken');

module.exports = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
    next();
  } catch (error) {
    return null;
  }
};