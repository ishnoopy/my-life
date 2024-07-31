const BaseClass = require('../core/baseClass');
const AuthRepository = require('../repository/auth.repository');

class AuthService extends BaseClass {
  constructor() {
    super(),
    this.authRepository = AuthRepository
  }

  async register(userData) {
    return await this.authRepository.register(userData);
  }
}

module.exports = new AuthService();