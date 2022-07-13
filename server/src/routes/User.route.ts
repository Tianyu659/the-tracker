import express from "express";
import { signup } from "../controllers/User.controller";

const userRoutes = express.Router();
userRoutes.get("/", (_req, res) => {
  console.log("sanity checking...");
  res.status(200).json({ message: "sanity checking..." });
});
userRoutes.post("/signup", signup);

/**
 * @export {express.Router} - router for User models
 */
export default userRoutes;
