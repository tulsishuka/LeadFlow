import { Router } from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  resetPassword,
  getMembers,
} from "../controllers/user.controller";

import {
  protect,
  authorize,
} from "../middlewares/auth.middleware";


const router = Router();


// Get all users
router.get(
  "/",
  protect,
  authorize("admin"),
  getUsers
);


// Get only members
// For assigning leads
router.get(
  "/members",
  protect,
  authorize("admin"),
  getMembers
);


// Get single user
router.get(
  "/:id",
  protect,
  authorize("admin"),
  getUser
);


// Create user
router.post(
  "/",
  protect,
  authorize("admin"),
  createUser
);


// Update user
router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateUser
);


// Delete user
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteUser
);


// Reset password
router.put(
  "/:id/reset-password",
  protect,
  authorize("admin"),
  resetPassword
);


export default router;