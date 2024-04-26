/**
 * @swagger
 * tags:
 *   name: Suggestion
 *   description: Suggestion routes
 */

import { Router } from 'express';
import { addNewSuggestion, deleteSuggestion, getSuggestions } from '../modules/suggestions/controller/suggestionControllers';
import { AdminAuth } from '../middlewares/AdminAuth';

const suggestionRoutes = Router();

/**
 * @swagger
 * /suggestion/add:
 *   post:
 *     summary: Add a new suggestion
 *     tags: [Suggestion]
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
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - subject
 *               - message
 *     responses:
 *       200:
 *         description: Suggestion added successfully
 */
suggestionRoutes.post("/add", addNewSuggestion);

/**
 * @swagger
 * /suggestion/suggestions:
 *   get:
 *     summary: Get all suggestions
 *     tags: [Suggestion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all suggestions
 */
suggestionRoutes.get("/suggestions", AdminAuth, getSuggestions);

/**
 * @swagger
 * /suggestion/delete:
 *   delete:
 *     summary: Delete a suggestion
 *     tags: [Suggestion]
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
 *         description: Suggestion deleted successfully
 */
suggestionRoutes.delete("/delete", AdminAuth, deleteSuggestion);

export default suggestionRoutes;
