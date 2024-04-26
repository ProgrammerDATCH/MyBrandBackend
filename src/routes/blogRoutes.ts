/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Blog routes
 */

import { Router } from 'express';
import { addNewBlog, deleteBlog, getBlogs, getOneBlog } from '../modules/blog/controller/blogControllers';
import { Auth } from '../middlewares';
import { AdminAuth } from '../middlewares/AdminAuth';

const blogRoutes = Router();

/**
 * @swagger
 * /blog/add:
 *   post:
 *     summary: Add a new blog
 *     tags: [Blog]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *             required:
 *               - title
 *               - description
 *               - image
 *     responses:
 *       200:
 *         description: Blog added successfully
 */
blogRoutes.post("/add", Auth, addNewBlog);

/**
 * @swagger
 * /blog/blogs:
 *   get:
 *     summary: Get all blogs
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: List of all blogs
 */
blogRoutes.get("/blogs", getBlogs);

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     summary: Get a blog by ID
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog retrieved successfully
 */
blogRoutes.get("/blog/:id", getOneBlog);

/**
 * @swagger
 * /blog/delete:
 *   delete:
 *     summary: Delete a blog
 *     tags: [Blog]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 */
blogRoutes.delete("/delete", AdminAuth, deleteBlog);

export default blogRoutes;