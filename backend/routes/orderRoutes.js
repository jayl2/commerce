import express from "express";
import { addOrder } from "../controllers/ordersController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

//POST localhost:4000/api/users
router.route("/").post(protect, addOrder);

export default router;
