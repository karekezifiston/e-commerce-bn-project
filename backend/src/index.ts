import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes";
import cartRouter from "./routes/cartRoute";

dotenv.config();

const app = express();  // <-- declare app first
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form-data / x-www-form-urlencoded
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/products", productRouter);
app.use("/cart", cartRouter); // <-- now it's correct, after app is declared

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
