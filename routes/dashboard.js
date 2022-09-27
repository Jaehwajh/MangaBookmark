const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Bookmark Routes

// Create new bookmark

router.post("/createBookmark", dashboardController.createBookmark);

// Delete bookmarks

router.delete("/deleteBookmark/:id", dashboardController.deleteBookmark);

module.exports = router;