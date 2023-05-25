import { Schema, model, Types } from "mongoose";
import Joi from "joi";

export const UserSchemaValidate = Joi.object({});

interface IUsers {
  username: string;
  email: string;
  createdAt: Date;
  posts: Types.ObjectId[];
}

const userSchema = new Schema<IUsers>({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
  },

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});
