/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: apiKey
 *       name: authorization
 *       in: header
 */


// -------------------------USER---------------------------------

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User routes
 */


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
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad Request
 *       409:
 *         description: User already exists
 */

/**
 * @swagger
 * /users/verify:
 *   post:
 *     summary: Verify User Email
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
 *               token:
 *                 type: string
 *             required:
 *               - email
 *               - token
 *     responses:
 *       200:
 *         description: Email verified successfully
 *       400:
 *         description: No User or Invalid Token
 */



/**
 * @swagger
 * /users/users:
 *   get:
 *     summary: Get all users (by ADMIN only)
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 */


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
 *         description: User details
 *       400:
 *         description: Invalid Token
 */


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
 *               - name
 *               - email
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Failed to update user
 */


/**
 * @swagger
 * /users/delete:
 *   delete:
 *     summary: Delete user (by ADMIN only)
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



// -------------------------ADMIN---------------------------------


/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin routes
 */


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
 *         description: Admin Details
 *       400:
 *         description: Invalid Token
 */


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






// -------------------------BLOGS--------------------------------------


/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Blog routes
 */



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
 *       201:
 *         description: Blog added successfully
 *       400:
 *         description: Bad Request
 */

/**
 * @swagger
 * /blog/update:
 *   post:
 *     summary: Update a blog (by ADMIN only)
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
 *             required:
 *               - title
 *               - description
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       400:
 *         description: Bad Request
 */


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





// -------------------------SUGGESTION---------------------------------

/**
 * @swagger
 * tags:
 *   name: Suggestion
 *   description: Suggestion routes
 */



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
 *       201:
 *         description: Suggestion added successfully
 *       400:
 *         description: Bad Request
 */



/**
 * @swagger
 * /suggestion/suggestions:
 *   get:
 *     summary: Get all suggestions (by ADMIN only)
 *     tags: [Suggestion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all suggestions
 *       400:
 *         description: Not logged in as Admin
 */



/**
 * @swagger
 * /suggestion/delete:
 *   delete:
 *     summary: Delete a suggestion (by ADMIN only)
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

//---------------------END----------------


