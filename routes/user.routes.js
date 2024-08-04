const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authGuard = require('../middlewares/authguard');
const { validate, createProfileValidation } = require('../validations/user/index');


router.get('/profile', authGuard, userController.getProfile);
router.post('/profile', authGuard, createProfileValidation, validate, userController.createProfile);

module.exports = router;