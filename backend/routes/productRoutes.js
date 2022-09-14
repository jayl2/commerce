import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";

// http://localhost:4000/api/products
router.route("/").get(getProducts);
// http://localhost:4000/api/products/id
router.route("/:id").get(getProductById);
// http://localhost:4000/api/products/id
// router.route("/:id").delete(deleteProduct);
router.route("/:id").delete(deleteProduct);

export default router;
