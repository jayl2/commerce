import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("API is Running!");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server is listening on port ${PORT} !! `));
