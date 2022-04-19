const jwt = require('jsonwebtoken');

module.exports = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
  } catch (error) {
    return null;
  }
};