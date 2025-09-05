import mongoose, { Document, Schema } from "mongoose";

// Product interface
export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category?: string;
}

// Schema
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

// Export model (re-use existing model if it exists)
const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
