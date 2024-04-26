/**
 * @swagger
 * tags:
 *   name: User
 *   description: User routes
 */

import express, { Request, Response } from 'express';
import { registerUser, getAllUsers, loginUser, updateUser, deleteUser, checkUser } from '../modules/user/controller/userControllers';
import { Auth } from '../middlewares';
import { AdminAuth } from '../middlewares/AdminAuth';

const userRoutes = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
userRoutes.post("/register", registerUser);

/**
 * @swagger
 * /users/users:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 */
userRoutes.get("/users", AdminAuth, getAllUsers);

/**
 * @swagger
 * /users/check:
 *   post:
 *     summary: Check user status
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User status
 */
userRoutes.post("/check", Auth, checkUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     tags: [User]
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
userRoutes.post("/login", loginUser);

/**
 * @swagger
 * /users/update:
 *   patch:
 *     summary: Update user information
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Failed to update user
 */
userRoutes.patch("/update", Auth, updateUser);

/**
 * @swagger
 * /users/delete:
 *   delete:
 *     summary: Delete user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Failed to delete user
 */
userRoutes.delete("/delete", AdminAuth, deleteUser);

export default userRoutes;