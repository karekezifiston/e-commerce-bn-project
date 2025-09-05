import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cartController";

const cartRouter = express.Router();

// Routes
cartRouter.post("/add", addToCart);        // POST /cart/add
cartRouter.get("/list", getCart);          // GET /cart/list
cartRouter.post("/remove", removeFromCart);// POST /cart/remove

export default cartRouter;
