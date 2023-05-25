//import modules
import { postServices } from "../Services/post.service";
import { Request, Response } from "express";
import { PostSchemaValidate } from "../Models/posts";

class postController {
  //add post controller
  createPost = async (req: Request, res: Response) => {
    //data to be saved in database
    const data = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      createdAt: new Date().toISOString(),
      published: req.body.published,
    };

    //validating the request
    const { error, value } = PostSchemaValidate.validate(data);

    if (error) res.json(error.message);

    //call the create post function in the service and pass the data from the request
    const post = await postServices.createPost(value);

    res.status(201).json(post);
  };

  //get all posts
  getPosts = async (req: Request, res: Response) => {
    const posts = await postServices.getPosts();

    res.status(200).json(posts);
  };

  //get a single post
  getAPost = async (req: Request, res: Response) => {
    //get id from the parameter
    const { id } = req.params;

    const post = await postServices.getPost(id);

    res.status(200).json(post);
  };

  //update post
  updatePost = async (req: Request, res: Response) => {
    const { id } = req.params;

    const post = await postServices.updatePost(id, req.body);

    res.json(post);
  };

  //delete a post
  deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;

    await postServices.deletePost(id);

    res.json("post deleted");
  };
}

//export class
export const PostController = new postController();
