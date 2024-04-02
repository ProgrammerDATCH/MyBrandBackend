import express from 'express';
import userRoutes from "./usersRoutes";

const router = express.Router();

router.use('/users', userRoutes);

export default router;