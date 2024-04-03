import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from '../utils'

const registerUser = async (req: Request, res: Response)=>{
    const {name, email, password} = req.body;
    const newUser = new User({
        name: name,
        email: email,
        password: password
    });

    await newUser.save();

    res.json({status: true, message: newUser});
}

const getAllUsers = async (req: Request, res: Response)=>{
    const users = await User.find();
    res.json({status: true, message: users});
}

const loginUser = async (req: Request, res: Response)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) res.json({status: false, message: "Invalid credentials"});
    if(user.password !== password) res.json({status: false, message: "Invalid password"});
    const token = generateToken(user.id);
    res.json({status: true, message: {token, user}});
}

const deleteUser = async (req: Request, res: Response)=>{
    const {email} = req.body;
    const { deletedCount } = await User.deleteOne({email});
    if(deletedCount < 1) res.json({status: false, message: "Failed to delete User"});
    else res.json({status: true, message: "Deleted."});
}

const updateUser = async (req: Request, res: Response)=>{
    const {id, name, email, password} = req.body;
    const user = await User.updateOne({_id: id}, {name, email, password});
    if(user.modifiedCount > 0) res.json({status: true, message: "User updated successfully"});
    else res.json({status: false, message: "Failed to update User"});
}

export {
    registerUser,
    getAllUsers,
    loginUser,
    deleteUser,
    updateUser,
}