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


router.get(
  "/",
  protect,
  authorize("admin"),
  getUsers
);

router.get(
  "/members",
  protect,
  authorize("admin"),
  getMembers
);


router.get(
  "/:id",
  protect,
  authorize("admin"),
  getUser
);

router.post(
  "/",
  protect,
  authorize("admin"),
  createUser
);


router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateUser
);


router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteUser
);


router.put(
  "/:id/reset-password",
  protect,
  authorize("admin"),
  resetPassword
);


export default router;