import { Router } from "express";
import { AuthController } from "../controllers/authViewController.js";
import { validateFormData } from "../middlewares/formValidationMiddleware.js";
import { registerUser } from "../middlewares/registerUserMiddleware.js";
import { sendMail } from "../middlewares/mailMiddleware.js";

const userRoutes = Router();

const authController = new AuthController();

userRoutes.get('/register', authController.displayRegisterView)
userRoutes.get('/login', authController.displayLoginView)
userRoutes.post('/register', validateFormData, registerUser, sendMail, authController.registerUser);
userRoutes.post('/login', authController.varifyUser)
userRoutes.get('/logout', authController.logout); //this is supposed to be post method

export default userRoutes;