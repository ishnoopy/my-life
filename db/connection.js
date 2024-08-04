const { Sequelize } = require('sequelize');
const { database, username, password, host } = require('../config/config');

// Connect to mysql database
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: host,
  username: username,
  password: password,
  database: database,
  logging: false,
});

module.exports = sequelize;