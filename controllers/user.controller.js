const BaseClass = require('../core/baseClass');
const UserService = require('../services/user.service');

class UserController extends BaseClass {
  constructor() {
    super();
    this.userService = UserService;
  }

  async createProfile(req, res) {
    try {
      const userData = {...req.body, user_id: req.user.id};
      console.log('userData', userData);
      const profile = await this.userService.createProfile(userData);
      res.status(201).json(profile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProfile(req, res) {
    try {
      const userId = req.user.id;
      const profile = await this.userService.getProfile(userId);
      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();