const BaseClass = require('../core/baseClass');

class AuthRepository extends BaseClass {
  constructor() {
    super()
  }

  async register(userData) {
    return {
      message: 'User registered successfully!',
      data: userData
    }
  }
}

module.exports = new AuthRepository();