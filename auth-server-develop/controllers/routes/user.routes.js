// user.routes.js
import express from "express";
import userController from "../user.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/test", authMiddleware, (req, res) => {
  res.json({ hi: "hi" });
});

export default router;
