const express = require("express");
const letterController = require("../controllers/letterController");

const router = express.Router();

// Community stats
router.get("/stats", letterController.getLetterStats);

// Letters
router
  .route("/")
  .get(letterController.getAllLetters)
  .post(letterController.createLetter);

// Like a letter
router.patch("/:id/like", letterController.likeLetter);

module.exports = router;