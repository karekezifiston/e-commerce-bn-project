import ProductModel from "../models/productModel";
import fs from "fs";
import { Request, Response } from "express";
import { z } from "zod"; // 1. Import Zod

// For file uploads
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

// ----------------- ZOD SCHEMAS ----------------- //

// Schema to validate adding a product
const addProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0.01, "Price must be positive"),
  category: z.string().min(1, "Category is required"),
});

// Schema to validate removing a product
const removeProductSchema = z.object({
  id: z.string().min(1, "Product ID is required"),
});

// ----------------- CONTROLLERS ----------------- //

// Add a product
const addProduct = async (req: MulterRequest, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image file uploaded!" });
  }

  try {
    // Validate request body
    const { name, description, price, category } = addProductSchema.parse({
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      category: req.body.category,
    });

    const product = new ProductModel({
      name,
      description,
      price,
      category,
      imageUrl: req.file.filename,
    });

    await product.save();
    res.json({ success: true, message: "Product added successfully!", data: product });

  } catch (error: any) {
    if (error.errors) {
      return res.status(400).json({ success: false, message: error.errors });
    }
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, message: error.message, details: error });
  }
};

// List all products
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
  try {
    // Validate request body
    const { id } = removeProductSchema.parse(req.body);

    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Remove image file
    const filePath = `uploads/${product.imageUrl}`;
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting file:", err);
      else console.log("File deleted:", filePath);
    });

    await ProductModel.findByIdAndDelete(id);

    res.json({ success: true, message: "Product removed successfully" });
  } catch (error: any) {
    if (error.errors) {
      return res.status(400).json({ success: false, message: error.errors });
    }
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Error removing product", details: error });
  }
};

export { addProduct, listProducts, removeProduct };
