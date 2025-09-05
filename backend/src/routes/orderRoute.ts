import express from "express"
import logger from "../middleware/logger.js";
import { placeOrder, verifyOrder,userOrders,listOrders,updateStatus} from "../controllers/orderController"


const orderRouter = express.Router();

orderRouter.post("/place",logger,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",logger,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)


export default orderRouter;