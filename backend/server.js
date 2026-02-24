import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import {protect} from "./middleware/authMiddleware.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

//Connect to Database
connectDB();
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/products", productRoutes);

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

