import { Post } from "../Models/posts";
import mongoose from "mongoose";
export class postService {
  // create a post
  async createPost(data: any) {
    const { title } = data;
    
    try {
      const exists = await Post.findOne({ title }).exec();

      if (exists) return "Post with this title already exists!";

      return await Post.create(data);
    } catch (error) {
      console.error(error);
    }
  }

  // get all posts
  async getPosts() {
    try {
      return Post.find({});
    } catch (error) {
      console.error(error);
    }
  }

  //get a single post
  async getPost(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        // Invalid ObjectID, handle the error accordingly
        return "Invalid ID";
      }

      const post = await Post.findById({ _id: id });

      if (!post) return "No post like this.";

      return post;
    } catch (error) {
      console.error(error);
    }
  }

  // update a post
  async updatePost(id: string, data: any) {
    try {
      const post = await Post.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });

      if (!post) return "No post like this.";

      return post;
    } catch (error) {
      console.error(error);
    }
  }

  // delete a post
  async deletePost(id: string) {
    try {
      const post = await Post.findByIdAndDelete(id);

      if (!post) return "No post like this.";

      return post;
    } catch (error) {
      console.error(error);
    }
  }
}

//export the class
export const postServices = new postService();
