const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const authGuard = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;

    console.log('decoded', decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authGuard;
