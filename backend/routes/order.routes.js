import express from "express";
import { adminAuth } from "../middlewares/adminAuth.middleware.js";
import { userAuth } from "../middlewares/userAuth.js";
import { placeOrder } from "../controllers/order.controller.js";
const OrderRouter = express.Router();

// admin
// OrderRouter.post("/list", adminAuth, allOrders);
// OrderRouter.post("/status", adminAuth, updateStatus);

// user
OrderRouter.post("/", userAuth, placeOrder);

export default OrderRouter;
