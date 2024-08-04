const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const authGuard = require('../middlewares/authguard');
const { validate, loginUserValidation } = require('../validations/user/index');


router.post('/register', authController.register);
router.post('/login', loginUserValidation, validate, authController.login);

module.exports = router;