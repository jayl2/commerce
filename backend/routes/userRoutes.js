import express from "express";
const router = express.Router();
import { getUser } from "../controllers/userController.js";

router.post("/login", getUser);

export default router;
