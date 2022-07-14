import express from "express";
import dotenv from "dotenv";

import { getAllUsers, signup, login, getUserById, updateUser } from "../controllers/User.controller";

dotenv.config();

const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.get("/:id", getUserById);
userRoutes.put("/update", updateUser);

// sanity check and get all users for development purposes
if (process.env.NODE_ENV === "development") {
  userRoutes.get("/", (_req, res) => {
    console.log("user routes sanity checking...");
    res.status(200).json({ message: "user routes sanity checking..." });
  });
  userRoutes.get("/all", getAllUsers);
}

/**
 * @export {express.Router} - router for User models
 */
export default userRoutes;
