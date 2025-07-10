import express from "express";
import { getUserProfile, updateProfile, syncUser, getCurrentUser, followUser } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile/:username", getUserProfile);

router.post("/sync", protectRoute, (req, res, next) => {
  console.log("User Sync Route:", {
    userId: req.auth?.userId,
    sessionId: req.auth?.sessionId,
  });
  syncUser(req, res, next);
});

router.get("/me", protectRoute, getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;