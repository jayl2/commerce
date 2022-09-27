import express from "express";
import path from "path";
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

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE.ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("This is root!");
  });
}

app.listen(PORT, () => console.log(`Serving on port ===>> ${PORT} !! `));
