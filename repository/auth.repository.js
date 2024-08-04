const BaseClass = require('../core/baseClass');
const { UserModel } = require('../models');

class AuthRepository extends BaseClass {
  constructor() {
    super()
    this.userModel = UserModel;
  }

  async register(userData) {
    try {
      console.log('userData', userData);
      const userExists = await this.userModel.findOne({ where: { email: userData.email } });
      if (userExists) {
        throw new Error('User already exists');
      }

      const user = await UserModel.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const user = await this.userModel.findOne({ where: { email, password } });
      if (!user) {
        throw new Error('Invalid credentials');
      }

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthRepository();