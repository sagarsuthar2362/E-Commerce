import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.model.js";

export const addProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      subCategory,
      sizes,
      bestseller,
      date,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const createdProduct = await Product.create({
      name,
      description,
      price,
      image: imagesUrl,
      category,
      subCategory,
      sizes,
      bestseller: bestseller === true ? true : false,
      date: Date.now(),
    });

    return res.status(201).json({
      message: "product created successfully",
      createdProduct,
    });
  } catch (error) {
    console.log("Server error uploading", error.message);
    next(error);
  }
};

export const listProducts = async (req, res, next) => {
  try {
    console.log(req.user)
    const allProducts = await Product.find();

    return res.status(200).json({
      allProducts,
    });
  } catch (error) {
    next(error);
  }
};

export const listSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await Product.findById(id);

    if (!item) {
      throw { status: 404, message: "Product now found" };
    }
    res.status(200).json({
      message: "Product available in db",
      item,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw { status: 404, message: "No product to delete" };
    }

    return res.status(200).json({
      message: "product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    next(error);
  }
};
