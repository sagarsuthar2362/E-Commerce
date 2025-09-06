import express from "express";
import { addProduct } from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.js";
const ProductRouter = express.Router();

ProductRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

export default ProductRouter;
