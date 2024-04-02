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

export {
    registerUser,
    getAllUsers,
    loginUser,
}