
import { Router } from 'express';
import { checkAdmin, dashboardStats, loginAdmin } from '../modules/admin/controller/adminControllers';
import { AdminAuth } from '../middlewares/AdminAuth';
import validation from '../middlewares/validation';
import userValidation from '../validations/userValidation';

const adminRoutes = Router();

adminRoutes.post("/check", AdminAuth, checkAdmin);
adminRoutes.post("/login", validation(userValidation.login),loginAdmin);
adminRoutes.get("/dashboard", AdminAuth, dashboardStats);

export default adminRoutes;
