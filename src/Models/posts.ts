import { Schema, model } from "mongoose";
import Joi from "joi";

export const PostSchemaValidate = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  published: Joi.boolean(),
});

interface IPosts {
  title: string;
  description: string;
  author: string;
  published: boolean;
}

const postSchema = new Schema<IPosts>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

//creating a model
export const Post = model<IPosts>("Post", postSchema);
