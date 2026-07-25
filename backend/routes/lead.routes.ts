import { Router } from "express";

import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
  assignLead,
  updateLeadStatus,
} from "../controllers/lead.controller";
import { authorize, protect } from "../middlewares/auth.middleware";


const router = Router();

/**
 * Public Route
 */
router.post("/", createLead);

/**
 * Admin & Member
 */
router.get(
  "/",
  protect,
  authorize("admin", "member"),
  getAllLeads
);

router.get(
  "/:id",
  protect,
  authorize("admin", "member"),
  getLeadById
);

/**
 * Admin Only
 */
router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateLead
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteLead
);

router.put(
  "/:id/assign",
  protect,
  authorize("admin"),
  assignLead
);

/**
 * Admin & Member
 */
router.put(
  "/:id/status",
  protect,
  authorize("admin", "member"),
  updateLeadStatus
);

export default router;