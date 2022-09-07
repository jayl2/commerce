import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// http://localhost:4000/api/products
router.route("/").get(getProducts);
// http://localhost:4000/api/products/id
router.route("/:id").get(getProductById);

export default router;
