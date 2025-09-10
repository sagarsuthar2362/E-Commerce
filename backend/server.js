import express from "express";
import cors from "cors";
import UserRouter from "./routes/user.routes.js";
import { ConnectDB } from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import "dotenv/config";
import ProductRouter from "./routes/product.routes.js";
import { upload } from "./middlewares/multer.js";
import { connectCloudinary } from "./config/cloudinary.js";
import OrderRouter from "./routes/order.routes.js";

// app config
const app = express();
const port = process.env.PORT || 3000;
ConnectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// endpoints
app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/order", OrderRouter);


// error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log("server running on port: " + port);
});
