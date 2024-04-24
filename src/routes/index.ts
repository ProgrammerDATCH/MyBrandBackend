import express from 'express';
import userRoutes from "./usersRoutes";
import suggestionRoutes from './suggestionRoutes';
import blogRoutes from './blogRoutes';
import commentRoutes from './commentRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/suggestion', suggestionRoutes)
router.use('/blog', blogRoutes)
router.use('/comment', commentRoutes)

export default router;