import express from 'express'
import { registerUser, getAllUsers } from '../controllers';

const userRoutes = express.Router();

userRoutes.post("/register", registerUser)
userRoutes.get("/users", getAllUsers)

export default userRoutes;