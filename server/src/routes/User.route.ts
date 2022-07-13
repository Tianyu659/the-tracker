import express from "express";
import { signup, login } from "../controllers/User.controller";

const userRoutes = express.Router();

userRoutes.get("/", (_req, res) => {
  console.log("user routes sanity checking...");
  res.status(200).json({ message: "user routes sanity checking..." });
});

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

/**
 * @export {express.Router} - router for User models
 */
export default userRoutes;
