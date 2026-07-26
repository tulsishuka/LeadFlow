import { Router } from "express";

import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
  assignLead,
  getMyLeads,
  updateLeadStatus,
  updateLeadNotes,
} from "../controllers/lead.controller";

import {
  protect,
  authorize,
} from "../middlewares/auth.middleware";

const router = Router();

/**
 * Public - Create Lead
 */
router.post("/", createLead);

/**
 * Admin & Member - Get All Leads
 */
router.get(
  "/",
  protect,
  authorize("admin", "member"),
  getAllLeads
);

/**
 * Member - Get Assigned Leads
 * IMPORTANT:
 * Keep this BEFORE "/:id"
 */
router.get(
  "/my-leads",
  protect,
  authorize("member"),
  getMyLeads
);

/**
 * Admin & Member - Get Single Lead
 */
router.get(
  "/:id",
  protect,
  authorize("admin", "member"),
  getLeadById
);

/**
 * Admin Only - Update Lead
 */
router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateLead
);

/**
 * Admin Only - Delete Lead
 */
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteLead
);

/**
 * Admin Only - Assign Lead
 */
router.put(
  "/:id/assign",
  protect,
  authorize("admin"),
  assignLead
);

/**
 * Admin & Member - Update Lead Status
 */
router.put(
  "/:id/status",
  protect,
  authorize("admin", "member"),
  updateLeadStatus
);

//////////////////
router.put(
  "/:id/notes",
  protect,
  authorize("admin", "member"),
  updateLeadNotes
);




export default router;