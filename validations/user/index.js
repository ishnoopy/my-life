const { body, query, matchedData, validationResult } = require('express-validator');
const { UserModel } = require('../../models');

const createUserValidation = [
  body('email').isEmail().custom(async (email) => {
    const userExists = await UserModel.findOne({ where: { email } });
    if (userExists) {
      throw new Error('User already exists');
    }

    return true;
  }),

  body('password').isLength({ min: 6 }),
  body('confirmPassword').custom((confirmPassword) => {
    if (confirmPassword !== matchedData('password')) {
      throw new Error('Password confirmation does not match password');
    }

    return true;
  })
  
]

const loginUserValidation = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
];
const createProfileValidation = [
  body('first_name').isString(),
  body('last_name').isString(),
  body('birth_date').isISO8601().toDate() // Validate and convert to Date object
]

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

module.exports = {
  createUserValidation,
  loginUserValidation,
  createProfileValidation,
  validate
}