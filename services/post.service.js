const BaseClass = require('../core/baseClass');
const PostRepository = require('../repository/post.repository');
const { VisibilityType } = require('../consts/index');

class PostService extends BaseClass {
  constructor() {
    super();
    this.postRepository = PostRepository;
  }

  async createPost(postData) {
    try {
      const postVisibility = VisibilityType[postData.visibility];
      return await this.postRepository.createPost({...postData, visibility: postVisibility});
    } catch (error) {
      throw error;
    }
  }

  async getPosts(userId) {
    try {
      return await this.postRepository.getPosts(userId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PostService();