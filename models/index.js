const sequelize = require('../db/connection');
const UserModel = require('./user.model');
const ProfileModel = require('./profile.model');
const PostModel = require('./post.model');


sequelize.sync();

module.exports = {
  UserModel,
  ProfileModel,
  PostModel,
  sequelize
}