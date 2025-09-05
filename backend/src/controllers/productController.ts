import ProductModel from "../models/productModel";
import fs from "fs";
import { Request, Response } from "express";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

// Add a product
const addProduct = async (req: MulterRequest, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image file uploaded!" });
  }

  const product = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    price: Number(req.body.price),
    category: req.body.category,
    imageUrl: req.file.filename,
  });

  try {
    await product.save();
    res.json({ success: true, message: "Product added successfully!", data: product });
  } catch (error: any) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, message: error.message, details: error });
  }
};

// Get all products
const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find({});
    res.json({ success: true, data: products });
  } catch (error: any) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Error fetching product list", details: error });
  }
};

// Remove a product
const removeProduct = async (req: Request, res: Response) => {
  // ✅ Debug the request body
  console.log("req.body:", req.body);

  try {
    const productId = req.body.id; // get ID from request body
    if (!productId) {
      return res.status(400).json({ success: false, message: "Product ID is required" });
    }

    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Remove image file
    const filePath = `uploads/${product.imageUrl}`;
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting file:", err);
      else console.log("File deleted:", filePath);
    });

    await ProductModel.findByIdAndDelete(productId);

    res.json({ success: true, message: "Product removed successfully" });
  } catch (error: any) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Error removing product", details: error });
  }
};


export { addProduct, listProducts, removeProduct };
