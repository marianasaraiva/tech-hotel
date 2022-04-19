const jwt = require('jsonwebtoken');

module.exports = (client) => {
  try {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign(client, process.env.JWT_SECRET, jwtConfig);
  
    return (token);
  } catch (error) {
    next(error);
  }
};