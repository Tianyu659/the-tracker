import { Request, Response } from "express";

import User from "../models/User.model";
import { hashPassword, checkPassword } from "../services/bcrypt.service";

/**
 * user signup
 * with checks for existing username and email, password complexity and comfirm pwd
 * returns new user if successful
 * @param req
 * @param res
 * @returns
 */
export const signup = async (req: Request, res: Response) => {
  const { fname, lname, username, password, confirmPassword, email } = req.body;

  try {
    var errors = [];

    // If username > 10 characters, throw error
    if (username.length > 10)
      errors.push("Username must be less than 10 characters");
    // If username contains special characters, throw error
    else if (/[^a-zA-Z0-9]/.test(username))
      errors.push("Username must contain only letters and numbers");
    // If username is empty, throw error
    else if (username.length === 0) errors.push("Username must not be empty");

    // If password is empty, throw error
    if (password.length === 0) errors.push("Password must not be empty");
    // If password is not complex enough, throw error
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    )
      errors.push(
        "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
      );

    // If password and confirmPassword do not match, then stop the signup process and return an error
    if (password !== confirmPassword) errors.push("Password does not match");

    // If email is in the wrong format, throw error
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.push("Email is in the wrong format");

    // If fname or lname is empty, throw error
    if (fname.length === 0 || lname.length === 0)
      errors.push("Please enter your full name");

    // If username exists, then stop the signup process and return an error
    const existingUser = await User.findOne({ username });
    if (existingUser) errors.push("Username already exists");

    // If email exists, then stop the signup process and return an error
    if (email) {
      const existingEmail = await User.findOne({ email });
      if (existingEmail) errors.push("Email already exists");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    // future feature: add email verification

    // TODO: token

    const hashedPassword = await hashPassword(password);

    const userResult = await User.create({
      username: username!,
      fname: fname!,
      lname: lname!,
      password: hashedPassword!,
      email: email ? email : null,
    });

    return res.status(200).json({ success: true, userResult });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errorAt: "User.controller.signup",
      message: "Something went wrong. Please try again later.",
    });
  }
};

/**
 * signin with username/email and password
 * checkes if username/email exists and password is correct
 * @param req
 * @param res
 * @returns
 */
export const login = async (req: Request, res: Response) => {
  const { usernameOrEmail, password } = req.body;

  try {
    // Check if user with entered username or email exists
    const existingUser = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!existingUser)
      return res
        .status(404)
        .json({ message: "Username or email does not exist" });

    // TODO: auth with hashed password

    if (!await checkPassword(password, existingUser.password))
      return res.status(400).json({ message: "Password is incorrect" });

    // Response 200 if it is correct
    return res.status(200).json({ success: true, result: existingUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errorAt: "User.controller.login",
      message: "Something went wrong. Please try again later.",
    });
  }
};

/**
 * returns all users. for development purposes only
 * @param _req
 * @param res
 * @returns
 */
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errorAt: "User.controller.getAllUsers",
      message: "Something went wrong. Please try again later.",
    });
  }
};

// TODO: search by id

// TODO: search by name/username

// TODO: search by email

// TODO: update user info
