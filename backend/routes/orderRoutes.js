import express from "express";
import { addOrder } from "../controllers/ordersController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getOrderById } from "../controllers/ordersController.js";
const router = express.Router();

//POST localhost:4000/api/users
router.route("/").post(protect, addOrder);
router.route("/:id").post(protect, getOrderById);

export default router;
