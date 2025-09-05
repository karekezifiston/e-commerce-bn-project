import CartModel from "../models/cartModel"; // Make sure the import matches the model name
import { Request, Response } from "express";

// Add a product to cart
const addToCart = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ success: false, message: "Product ID and quantity required" });
  }

  try {
    // Check if product is already in cart (optional improvement)
    const existingItem = await CartModel.findOne({ productId });
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json({ success: true, message: "Cart updated", data: existingItem });
    }

    const cartItem = new CartModel({ productId, quantity });
    await cartItem.save();
    res.json({ success: true, message: "Added to cart", data: cartItem });
  } catch (error: any) {
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
