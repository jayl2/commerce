import express from "express";
const router = express.Router();
import { getUser } from "../controllers/userController.js";
import { getUserProfile } from "../controllers/userController.js";
import { registerUser } from "../controllers/userController.js";
import { UpdateProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

//POST localhost:4000/api/users
router.route("/").post(registerUser);

//GET localhost:4000//api/users/login
router.post("/login", getUser);

//GET localhost:4000//api/users/profile
router.route("/profile").get(protect, getUserProfile);

//PUT localhost:4000//api/users/profile
router.route("/profile").put(protect, UpdateProfile);

export default router;
