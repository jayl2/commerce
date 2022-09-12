import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();
dotenv.config();
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("This is root!");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => console.log(`Serving on port ===>> ${PORT} !! `));
