const BaseClass = require('../core/baseClass');
const AuthService = require('../services/auth.service');
const { logger, logError } = require('../middlewares/logger');
class AuthController extends BaseClass {
  constructor() {
    super();
    this.authService = AuthService;
  }

  async register(req, res) {
    try {
      const userData = req.body;
      const user = await this.authService.register(userData);
      logger.info(`User registered successfully: ${user}`);
      res.status(201).json(user);
    } catch (error) {
      logError(error);
      res.status(500).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const userData = req.body;
      const user = await this.authService.login(userData);
      res.status(200).json(user);
    } catch (error) {
      logError(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();