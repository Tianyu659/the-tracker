import express from "express";
import { getAllUsers, signup, login } from "../controllers/User.controller";

const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

// TODO: checking through NODE_ENV is currently not working for some reason
// sanity check and get all users for development purposes
// if (process.env.NODE_ENV === "development") {
    userRoutes.get("/", (_req, res) => {
        console.log("user routes sanity checking...");
        res.status(200).json({ message: "user routes sanity checking..." });
      });
    userRoutes.get("/all", getAllUsers);
// }

/**
 * @export {express.Router} - router for User models
 */
export default userRoutes;
