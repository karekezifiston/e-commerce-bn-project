import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/productRoute";
import cartRouter from "./routes/cartRoute";
import authRoute from "./routes/authRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Full CORS setup
const corsOptions = {
  origin: "http://localhost:5174",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

// ✅ Middleware order matters: CORS must come before routes
app.use(cors(corsOptions)); // handles preflight automatically

// ✅ JSON & URL Encoded Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ✅ Root route
app.get("/", (req, res) => res.send("🚀 Backend is running!"));

// ✅ Routes
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/api/user", authRoute);

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ Start server
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
