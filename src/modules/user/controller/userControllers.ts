import { Request, Response } from "express";
import { comparePassword, encryptPassword, generateRandomToken, generateToken } from '../../../utils'
import { addUserToken, checkToken, createUser, deleteUserByEmail, findUserByEmail, getAllRegisteredUsers, getUserInfo, updateUserByEmail, verifyUserStatus } from "../repository/userRepository";
import sendEmail from "../../../middlewares/sendEmail";

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
    const newCreatedUser = await createUser(newUser);
    //createToken & send Email
    const newToken = generateRandomToken();
    await addUserToken(newCreatedUser.id, newToken);
    await sendEmail(`Email Verification - My Brand`, `<p><p>Hello ${name}, <br>Your Email verificaton code is: <h2> ${newToken} </h2></p><p>Remember, beware of scams and keep this one-time verification code confidential<br><br>Thanks.</p>`, email);
    //end
    res.json({status: true, message: newCreatedUser});
}

const getAllUsers = async (req: Request, res: Response)=>{
    res.json({status: true, message: await getAllRegisteredUsers()});
}

const checkUser = async (req: Request, res: Response)=>{
    res.json({status: true, message: await getUserInfo((req as any).userId)});
}

const verifyUser = async (req: Request, res: Response)=>{
    const {email, token} = req.body;
    const user = await findUserByEmail(email)
    if(!user) return res.json({status: false, message: "No User with that email."});
    const foundToken = await checkToken(user.id, token);
    if(!foundToken) return res.json({status: false, message: "Invalid Token"});
    await verifyUserStatus(user.id)
    res.json({status: true, message: `User ${user.name} verified successfully.`});
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
    checkUser,
    verifyUser
}