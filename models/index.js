const sequelize = require('../db/connection');
const UserModel = require('./user.model');
const ProfileModel = require('./profile.model');

sequelize.sync();

module.exports = {
  UserModel,
  ProfileModel,
  sequelize
}