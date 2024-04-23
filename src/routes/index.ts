import express from 'express';
import userRoutes from "./usersRoutes";
import suggestionRoutes from './suggestionRoutes';
import blogRoutes from './blogRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/suggestion', suggestionRoutes)
router.use('/blog', blogRoutes)

export default router;