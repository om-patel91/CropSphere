import express from "express";
import { getEquipments, createEquipment } from "../controllers/equipmentController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEquipments);
router.post("/", protect, admin, createEquipment);

export default router;