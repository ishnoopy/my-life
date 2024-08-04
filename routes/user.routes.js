const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authGuard = require('../middlewares/authguard');
const { createProfileValidation } = require('../validations/user/index');
const validate = require('../validations/validate');

router.get('/profile', authGuard, userController.getProfile);
router.post('/profile', authGuard, createProfileValidation, validate, userController.createProfile);

module.exports = router;