import mongoose, { Schema, Document } from "mongoose";

interface ICart extends Document {
  productId: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

const cartSchema = new Schema<ICart>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model<ICart>("Cart", cartSchema);
