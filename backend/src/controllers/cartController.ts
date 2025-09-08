import CartModel from "../models/cartModel";
import { Request, Response } from "express";
import { z } from "zod";

// Define a schema for validating the request body
const addToCartSchema = z.object({
  id: z.string().min(1, "Product ID is required"),
  quantity: z.coerce.number().min(1, "Quantity must be at least 1"), // converts string to number automatically
});

// Add a product to cart
const addToCart = async (req: Request, res: Response) => {
  try {
    // Validate the request body using Zod
    const { id, quantity } = addToCartSchema.parse(req.body);

    // Check if product is already in cart
    const existingItem = await CartModel.findOne({ productId: id });
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json({ success: true, message: "Cart updated", data: existingItem });
    }

    // Add new product to cart
    const cartItem = new CartModel({ productId: id, quantity });
    await cartItem.save();
    res.json({ success: true, message: "Added to cart", data: cartItem });

  } catch (error: any) {
    // If Zod throws an error
    if (error.errors) {
      return res.status(400).json({ success: false, message: error.errors });
    }

    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all cart items
const getCart = async (req: Request, res: Response) => {
  try {
    const cartItems = await CartModel.find({}).populate("productId");
    res.json({ success: true, data: cartItems });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove item from cart
const removeFromCart = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ success: false, message: "Cart item ID required" });

  try {
    await CartModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Removed from cart" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addToCart, getCart, removeFromCart };
