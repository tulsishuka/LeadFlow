import { Router } from "express";

import { protect, authorize } from "../middlewares/auth.middleware";
import { getDashboardData, getDashboardStats } from "../controllers/dashboard.controller";

const router = Router();

router.get(
  "/stats",
  protect,
  authorize("admin", "member"),
  getDashboardStats
);

router.get(
  "/",
  protect,
  authorize("admin", "member"),
  getDashboardData
);

export default router;