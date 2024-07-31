const BaseClass = require('../core/baseClass');
const AuthService = require('../services/auth.service');

const { logger } = require('../middlewares/logger');

class AuthController extends BaseClass {
  constructor() {
    super();
    this.authService = AuthService;
  }

  async register(req, res) {
    try {
      const response = await this.authService.register(req.body);
      res.send(response);
    } catch (error) {
      logger.error('Error in auth controller', { error });
      res.status(400).send(error);
    }
  }
}

module.exports = new AuthController();