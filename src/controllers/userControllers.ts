import { Request, Response } from "express";
import User from "../models/User";

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

export {
    registerUser,
    getAllUsers,
}