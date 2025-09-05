import express from "express";
import { addProduct, listProducts, removeProduct } from "../controllers/productController";
import multer from "multer";

const productRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
productRouter.post("/add", upload.single("image"), addProduct); // POST /products/add
productRouter.get("/list", listProducts);                       // GET /products/list
productRouter.post("/remove", removeProduct); // POST /products/remove             // POST /products/remove

export default productRouter;