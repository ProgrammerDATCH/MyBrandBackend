import express from 'express'
import { registerUser, getAllUsers, loginUser, updateUser, deleteUser } from '../controllers';

const userRoutes = express.Router();

userRoutes.post("/register", registerUser)
userRoutes.get("/users", getAllUsers)
userRoutes.post("/login", loginUser)
userRoutes.patch("/update", updateUser)
userRoutes.delete("/delete", deleteUser)

export default userRoutes;