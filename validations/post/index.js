const { body, query, matchedData, validationResult } = require('express-validator');
const { UserModel } = require('../../models');

const createPostValidation = [
  body('title').isString(),
  body('content').isString(),
  body('visibility').isIn(['PUBLIC', 'PRIVATE'])
]

module.exports = {
  createPostValidation
}