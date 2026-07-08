const express = require("express");
const { register, login, profile } = require("../controllers/authController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/profile", protect, profile);

module.exports = router;