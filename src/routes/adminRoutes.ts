
import { Router } from 'express';
import { checkAdmin, dashboardStats, loginAdmin } from '../modules/admin/controller/adminControllers';
import { AdminAuth } from '../middlewares/AdminAuth';

const adminRoutes = Router();

adminRoutes.post("/check", AdminAuth, checkAdmin);
adminRoutes.post("/login", loginAdmin);
adminRoutes.get("/dashboard", AdminAuth, dashboardStats);

export default adminRoutes;
