const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const authGuard = require('../middlewares/authguard');
const { loginUserValidation } = require('../validations/user/index');
const validate = require('../validations/validate');

router.post('/register', authController.register);
router.post('/login', loginUserValidation, validate, authController.login);

module.exports = router;