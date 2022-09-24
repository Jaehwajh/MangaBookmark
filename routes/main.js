const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homepageController = require("../controllers/homepage");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Homepage/dashboard
router.get("/", homepageController.getHomepage);
router.get("/dashboard", ensureAuth, );

// Login Page
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// Signout Page
router.get("/signout", authController.logout);

// Signup Page
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);


module.exports = router;