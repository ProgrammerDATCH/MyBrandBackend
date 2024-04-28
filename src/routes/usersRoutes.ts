import { Router } from 'express';
import { registerUser, getAllUsers, loginUser, updateUser, deleteUser, checkUser, verifyUser } from '../modules/user/controller/userControllers';
import { Auth } from '../middlewares';
import { AdminAuth } from '../middlewares/AdminAuth';
import validation from '../middlewares/validation';
import userValidation from '../validations/userValidation';

const userRoutes = Router();

userRoutes.post("/register", validation(userValidation.registration), registerUser);
userRoutes.get("/users", AdminAuth, getAllUsers);
userRoutes.post("/check", Auth, checkUser);
userRoutes.post("/verify", validation(userValidation.verifyToken), verifyUser);
userRoutes.post("/login", validation(userValidation.login), loginUser);
userRoutes.patch("/update", Auth, validation(userValidation.updateUser), updateUser);
userRoutes.delete("/delete", AdminAuth, validation(userValidation.emailVerification), deleteUser);

export default userRoutes;