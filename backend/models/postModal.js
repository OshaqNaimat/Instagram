import mongoose from "mongoose";
const postSchema = mongoose.Schema(
  {
    caption: {
      type: String,
      required: false,
    },
    filter: {
      type: String,
      required: false,
      default: "original",
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("posts", postSchema);
