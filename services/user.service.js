const BaseClass = require('../core/baseClass');
const UserRepository = require('../repository/user.repository');

class UserService extends BaseClass {
  constructor() {
    super();
    this.userRepository = UserRepository;    
  }

  async createProfile(userData) {
    try {
      const hasProfile = await this.userRepository.getProfile(userData.user_id);
      if (hasProfile) {
        throw new Error('Profile already exists');
      }
      return await this.userRepository.createProfile(userData);
    } catch (error) {
      throw error;
    }
  }

  async getProfile(userId) {
    try {
      return await this.userRepository.getProfile(userId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();