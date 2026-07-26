import { Router } from "express";

import {
  getLeadActivities,
  getAllActivities,
} from "../controllers/activity.controller";

import {
  protect,
  authorize,
} from "../middlewares/auth.middleware";


const router = Router();


router.get(
  "/",
  protect,
  authorize("admin"),
  getAllActivities
);


router.get(
  "/lead/:id",
  protect,
  authorize("admin", "member"),
  getLeadActivities
);


export default router;