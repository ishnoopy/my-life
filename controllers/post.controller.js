const BaseClass = require('../core/baseClass');
const PostService = require('../services/post.service');

class PostController extends BaseClass {
  constructor() {
    super(),
      this.postService = PostService;
  }

  async createPost(req, res) {
    try {
      let postData = {...req.body, user_id: req.user.id}

      const post = await this.postService.createPost(postData);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPosts(req, res) {
    try {
      const userId = req.user.id;
      const posts = await this.postService.getPosts(userId);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PostController();