const express = require("express");

const letterController = require("../controllers/letterController");
const adminController = require("../controllers/adminController");

const router = express.Router();

// PUBLIC
router.get("/stats", letterController.getLetterStats);

router
  .route("/")
  .get(letterController.getAllLetters)
  .post(letterController.createLetter);

// PUBLIC
router.patch(
  "/:id/like",
  letterController.likeLetter
);

// ADMIN ONLY
router.delete(
  "/:id",
  adminController.protectAdmin,
  letterController.deleteLetter
);

module.exports = router;