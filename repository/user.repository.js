const BaseClass = require('../core/baseClass');
const { UserModel, ProfileModel } = require('../models');

class UserRepository extends BaseClass {
  constructor() {
    super();
    this.userModel = UserModel;
  }

  async getProfile(userId) {
    try {
      return await ProfileModel.findOne({ where: { user_id: userId } });

    } catch (error) {
      throw error;
    }
  }

  async createProfile(userData) {
    try {
      const profile = await ProfileModel.create(userData);
      return profile

    } catch (error) {
      throw error;
    }

  }
}

module.exports = new UserRepository();