import express from "express";
import {
  createRental,
  getMyRentals,
  getAllRentals,
  updateRentalStatus
} from "../controllers/rentalController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createRental);
router.get("/my", protect, getMyRentals);

// admin routes
router.get("/", protect, admin, getAllRentals);
router.put("/:id/status", protect, admin, updateRentalStatus);

export default router;