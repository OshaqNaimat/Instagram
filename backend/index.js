import express from "express";
import { postRouter } from "./routes/postRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import color from "colors";
import { connectDB } from "./config/connect.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
connectDB();

app.use("/api/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT.cyan}`);
});
