const express = require("express");

const {
  login,
  register,
  test,
  logout,
  getMe,
} = require("../controller/authController");
const { protectedRoute } = require("../middleware/protectedRoute");
const router = express.Router();

router.get("/me", protectedRoute, getMe);
router.post("/logout", logout);
router.post("/register", register);
router.post("/login", login);
router.get("/test", test);

module.exports = router;
