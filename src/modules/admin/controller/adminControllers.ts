import { Request, Response } from "express";
import { generateAdminToken } from '../../../utils'
import { findAdmin, getAdminInfo, totalBlogs, totalSuggestions, totalUsers } from "../repository/adminRepository";


const checkAdmin = async (req: Request, res: Response)=>{
    res.json({status: true, message: await getAdminInfo((req as any).adminId)});
}

const dashboardStats = async (req: Request, res: Response)=>{
    const dashboard = {
        users: await totalUsers(),
        suggestions: await totalSuggestions(),
        blogs: await totalBlogs()
    }
    res.json({status: true, message: dashboard});
}

const loginAdmin = async (req: Request, res: Response)=>{
    const {email, password} = req.body;
    const admin = await findAdmin(email, password);
    if(!admin) return res.json({status: false, message: "Invalid Email or Password"});
    const token = generateAdminToken(admin.id);
    res.json({status: true, message: {token, admin}});
}

export {
    checkAdmin,
    loginAdmin,
    dashboardStats
}