/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin routes
 */

import express, { Request, Response } from 'express';
import { checkAdmin, dashboardStats, loginAdmin } from '../modules/admin/controller/adminControllers';
import { AdminAuth } from '../middlewares/AdminAuth';

const adminRoutes = express.Router();

/**
 * @swagger
 * /admin/check:
 *   post:
 *     summary: Check admin status
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin status
 */
adminRoutes.post("/check", AdminAuth, checkAdmin);

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin login
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */
adminRoutes.post("/login", loginAdmin);

/**
 * @swagger
 * /admin/dashboard:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics
 */
adminRoutes.get("/dashboard", AdminAuth, dashboardStats);

export default adminRoutes;
