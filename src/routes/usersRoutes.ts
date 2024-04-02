import express from 'express'
import { registerUser, getAllUsers, loginUser } from '../controllers';

const userRoutes = express.Router();

userRoutes.post("/register", registerUser)
userRoutes.get("/users", getAllUsers)
userRoutes.post("/login", loginUser)

export default userRoutes;