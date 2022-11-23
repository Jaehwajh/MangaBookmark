const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homepageController = require("../controllers/homepage");
const dashboardController = require("../controllers/dashboard");
const errorController = require("../controllers/error");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


// Homepage/dashboard
router.get("/", homepageController.getHomepage);
router.get("/dashboard", ensureAuth, dashboardController.getDashboard);

// Login Page
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// Signout Page
router.get("/logout", authController.logout);

// Signup Page
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

//Error Page
router.get("/error", errorController.getError);

module.exports = router;