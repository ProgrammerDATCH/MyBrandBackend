import express from 'express';
import userRoutes from "./usersRoutes";
import suggestionRoutes from './suggestionRoutes';
import blogRoutes from './blogRoutes';
import adminRoutes from './adminRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/suggestion', suggestionRoutes)
router.use('/blog', blogRoutes)
router.use('/admin', adminRoutes)

export default router;