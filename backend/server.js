import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import {protect} from "./middleware/authMiddleware.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"

dotenv.config();

//Connect to Database
connectDB();
const app = express();

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth",authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes)

//Test Route
app.get("/",(req,res) => {
    res.json({message: "CrosPhere API running ..."})
})
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You accessed protected route",
    user: req.user,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
    
})

