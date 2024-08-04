const dotenv = require('dotenv');
const path = require('path');
const environment = process.env.NODE_ENV || 'development';

dotenv.config()


const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
  },
}
module.exports = config[environment];