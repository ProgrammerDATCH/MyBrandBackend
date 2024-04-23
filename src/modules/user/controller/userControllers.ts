import { Request, Response } from "express";
import { comparePassword, encryptPassword, generateToken } from '../../../utils'
import { createUser, deleteUserByEmail, findUserByEmail, getAllRegisteredUsers, updateUserByEmail } from "../repository/userRepository";

const registerUser = async (req: Request, res: Response)=>{
    const {name, email, password} = req.body;
    const user = await findUserByEmail(email);
    if(user) return res.json({status: false, message: "User already exist."});
    const hashedPassword = await encryptPassword(password);
    const newUser = {
        name: name,
        email: email,
        password: hashedPassword
    };
    const newCreatedUser = await createUser(newUser);;
    res.json({status: true, message: newCreatedUser});
}

const getAllUsers = async (req: Request, res: Response)=>{
    res.json({status: true, message: await getAllRegisteredUsers()});
}

const loginUser = async (req: Request, res: Response)=>{
    const {email, password} = req.body;
    const user = await findUserByEmail(email);
    if(!user) return res.json({status: false, message: "Invalid Email or Password"});
    const passwordMatches = await comparePassword(password, user.password);
    if(!passwordMatches) return res.json({status: false, message: "Invalid Email or Password"});
    const token = generateToken(user.id);
    res.json({status: true, message: {token, user}});
}

const deleteUser = async (req: Request, res: Response)=>{
    const {email} = req.body;
    const user = await findUserByEmail(email);
    if(!user) return res.json({status: false, message: "User doesn't exist."});
    const { deletedCount } = await deleteUserByEmail(email);
    if(deletedCount < 1) res.json({status: false, message: "Failed to delete User"});
    else res.json({status: true, message: "Deleted."});
}

const updateUser = async (req: Request, res: Response)=>{
    const {name, email} = req.body;
    const user = await findUserByEmail(email);
    if(!user) return res.json({status: false, message: "User doesn't exist."});
    const updatedUser = await updateUserByEmail(email, {name});
    if(updatedUser.modifiedCount > 0) res.json({status: true, message: "User updated successfully"});
    else res.json({status: false, message: "Failed to update User"});
}

export {
    registerUser,
    getAllUsers,
    loginUser,
    deleteUser,
    updateUser,
}