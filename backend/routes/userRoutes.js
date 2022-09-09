import express from "express";
const router = express.Router();
import { getUser } from "../controllers/userController.js";
import { getUserProfile } from "../controllers/userController.js";
import { registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

//localhost:4000/api/users/login

router.route("/").post(registerUser);
router.post("/login", getUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
