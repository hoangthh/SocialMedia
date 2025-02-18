import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
      default: "Anonymous",
    },
    attachment: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model("Post", schema);
