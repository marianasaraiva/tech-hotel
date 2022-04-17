module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    console.log('JOI', err.message);
    const statusCode = '400';

    return res.status(statusCode).json({ message: err.message });
  }
  console.log('GERAL', err.message, err.stack);
  return res.status(500).json({ message: 'SERVER ERROR'});
};