const express = require("express");

const {
  login,
  register,
  logout,
  getMe,
} = require("../controller/auth.controller");
const authMiddleware = require("../../middlewares/auth.middleware");

const router = express.Router();

router.get("/check-auth", authMiddleware, getMe);
router.post("/logout", logout);
router.post("/register", register);
router.post("/login", login);


module.exports = router;
