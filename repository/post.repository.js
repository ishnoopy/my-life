const BaseClass = require('../core/baseClass');
const { PostModel } = require('../models');

class PostRepository extends BaseClass {
  constructor() {
    super()
    this.postModel = PostModel;
  }

  async createPost(postData) {
    try {
      return await this.postModel.create(postData);
    } catch (error) {
      throw error;      
    }
  }

  async getPosts(userId) {
    try {
      return await this.postModel.findAll({ where: { user_id: userId } });
    } catch (error) {
      throw error;      
    }
  }

  async getPost(postId) {
    try {
      return await this.postModel.findOne({ where: { id: postId } });
    } catch (error) {
      throw error;      
    }
  }

}

module.exports = new PostRepository();