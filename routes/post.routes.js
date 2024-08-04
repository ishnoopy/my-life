const router = require('express').Router();
const postController = require('../controllers/post.controller');
const authGuard = require('../middlewares/authguard');
const { createPostValidation } = require('../validations/post/index');
const validate = require('../validations/validate');

router.get('/', authGuard, postController.getPosts);
router.post('/', authGuard, createPostValidation, validate, postController.createPost);

module.exports = router;