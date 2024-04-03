import express from 'express'
import { registerUser, getAllUsers, loginUser, updateUser, deleteUser } from '../controllers';

const userRoutes = express.Router();

userRoutes.post("/register", registerUser)
userRoutes.get("/users", getAllUsers)
userRoutes.post("/login", loginUser)
userRoutes.post("/update", updateUser)
userRoutes.post("/delete", deleteUser)

export default userRoutes;