import express from "express";
import {
  addProduct,
  deleteProduct,
  listProducts,
  listSingleProduct,
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.js";
import { adminAuth } from "../middlewares/adminAuth.middleware.js";
const ProductRouter = express.Router();

ProductRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  adminAuth,
  addProduct
);

ProductRouter.get("/all", listProducts);
ProductRouter.get("/:id", listSingleProduct);
ProductRouter.delete("/delete/:id", adminAuth, deleteProduct);

export default ProductRouter;
