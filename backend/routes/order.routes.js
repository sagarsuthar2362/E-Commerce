import express from "express";
import { adminAuth } from "../middlewares/adminAuth.middleware.js";
import { userAuth } from "../middlewares/userAuth.js";
import {
  allOrders,
  myOrders,
  placeOrder,
  updateOrderStatus,
} from "../controllers/order.controller.js";
const OrderRouter = express.Router();

// admin
OrderRouter.get("/list", adminAuth, allOrders);
OrderRouter.put("/status/:id", adminAuth, updateOrderStatus);

// user
OrderRouter.post("/", userAuth, placeOrder);
OrderRouter.get("/my-orders", userAuth, myOrders);

export default OrderRouter;
