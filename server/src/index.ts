import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/User.route";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/user', userRoutes);

app.get("/", (_req, res) => {
  res.send("app is running");
});

const PORT = Number(process.env.PORT!) || 5005;
const MONGO_URL = `mongodb+srv://${process.env.MONGO_USERNAME!}:${process.env.MONGO_PASSWORD!}@cluster0.vm4dctv.mongodb.net/`;

mongoose
  .connect(MONGO_URL, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("server is running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
