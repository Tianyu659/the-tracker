import {Schema, model,}  from "mongoose";
import IUser from "../interfaces/IUser.interface";

const userSchema = new Schema<IUser> ({
    name: {type:String, required:true},
    password: {type:String, required:true},
    email: String,
    projects: {type:[String], required:true, default:[]},
},
{timestamps:true})

const User = model<IUser>("User", userSchema)
export default User