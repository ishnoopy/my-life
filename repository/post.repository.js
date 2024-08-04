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

  async getPosts(userId, attributes = null) {
    try {
      return await this.postModel.findAll({ where: { user_id: userId }, attributes });
    } catch (error) {
      throw error;      
    }
  }

  async getPost(postId, attributes = null) {
    try {
      return await this.postModel.findOne({ where: { id: postId }, attributes });
    } catch (error) {
      throw error;      
    }
  }

  async getPostsByCondition(condition, attributes = null) {
    try {
      return await this.postModel.findAll({ where: condition, attributes });
    } catch (error) {
      throw error;      
    }
  }

  async getPostByCondition(condition, attributes = null) {
    try {
      return await this.postModel.findOne({ where: condition, attributes });
    } catch (error) {
      throw error;      
    }
  }

}

module.exports = new PostRepository();