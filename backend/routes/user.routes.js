import express from "express";
import { AdminLogin, Login, Register } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";
const UserRouter = express.Router();

UserRouter.post("/register", Register);
UserRouter.post("/login", Login);
UserRouter.post("/admin", upload.none() ,AdminLogin);

export default UserRouter;
