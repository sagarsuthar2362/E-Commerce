import express from "express";
import { AdminLogin, Login, Register } from "../controllers/user.controller.js";
const UserRouter = express.Router();

UserRouter.post("/register", Register);
UserRouter.post("/login", Login);
UserRouter.post("/admin", AdminLogin);

export default UserRouter;
