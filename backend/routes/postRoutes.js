import express from "express";
import { addPost } from "../controller/PostController.js";
export const postRouter = express.Router();

postRouter.post("/addPost", addPost);
