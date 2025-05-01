import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
  updateUserProfile,
} from "../controllers/userControllers.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
