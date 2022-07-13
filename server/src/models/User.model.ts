import {Schema, model,}  from "mongoose";
import IUser from "../interfaces/IUser.interface";

const userSchema:Schema = new Schema<IUser> ({
    fname: {type:String, required:true},
    lname: {type:String, required:true},
    username: {type:String, required:true},
    password: {type:String, required:true},
    email: String,
    projects: {type:[String], required:true, default:[]},
},
{timestamps:true})

const User = model<IUser>("User", userSchema)
export default User