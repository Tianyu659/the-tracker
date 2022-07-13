import {Request, Response} from 'express';

import User from "../models/User.model";

/**
 * user signup with checks for existing username and email
 * @param req 
 * @param res 
 * @returns 
 */
export const signup = async (req: Request, res: Response) => { 
    const { fname,lname, username, password, confirmPassword, email } = req.body;
    
    try {
        // If username exists, then stop the signup process and return an error
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already exists." });

        // If email exists, then stop the signup process and return an error
        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).json({ message: "Email already exists." });

        // The below check should also be done in the frontend, included here for safety
        // If password and confirmPassword do not match, then stop the signup process and return an error
        if (password !== confirmPassword) return res.status(400).json({ message: "Password does not match." });

        // future feature: add email verification
        
        // wip token 
        // wip hash password
        const hashedPassword = password;

        const userResult = await User.create({ 
            username: username!,
            fname: fname!,
            lname: lname!,
            password: hashedPassword!, 
            email: email ? email : null,
        });

        return res.status(200).json({ userResult});
    } catch (err) {
        return res.status(500).json({ errorAt: "User.controller", message: 'Something went wrong. Please try again later.' });
    }
}