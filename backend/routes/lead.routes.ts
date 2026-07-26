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


router.post("/", createLead);

router.get(
  "/",
  protect,
  authorize("admin", "member"),
  getAllLeads
);

router.get(
  "/my-leads",
  protect,
  authorize("member"),
  getMyLeads
);


router.get(
  "/:id",
  protect,
  authorize("admin", "member"),
  getLeadById
);


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

router.put(
  "/:id/status",
  protect,
  authorize("admin", "member"),
  updateLeadStatus
);

router.put(
  "/:id/notes",
  protect,
  authorize("admin", "member"),
  updateLeadNotes
);




export default router;