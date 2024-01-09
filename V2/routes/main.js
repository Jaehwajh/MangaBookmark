const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");
const main = require("../controllers/main");

// Bookmark Routes

// Create new bookmark

router.post("/createBookmark", mainController.createBookmark);

// Delete bookmarks

router.delete("/deleteBookmark/:id", mainController.deleteBookmark);

// Bookmark Categorization

router.put("/completedBookmark/:id", mainController.completedBookmark);

module.exports = router;