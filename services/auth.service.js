const BaseClass = require('../core/baseClass');
const AuthRepository = require('../repository/auth.repository');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

class AuthService extends BaseClass {
  constructor() {
    super(),
      this.authRepository = AuthRepository
  }

  async register(userData) {
    try {
      return await this.authRepository.register(userData);
    } catch (error) {
      throw error;
    }
  }

  async login(userData) {
    try {
      const { email, password } = userData;
      let userInfo = await this.authRepository.login(email, password);
      const token = jwt.sign({ 
        id: userInfo.id, 
        email: userInfo.email
      }, jwtSecret, { expiresIn: '1h' });
      
      return {
        userInfo,
        token
      }

    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();