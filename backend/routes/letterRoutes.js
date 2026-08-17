const express = require("express");
const rateLimit = require("express-rate-limit");

const letterController = require("../controllers/letterController");
const adminController = require("../controllers/adminController");

const router = express.Router();

// Limit letter submissions
const createLetterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 5,

  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    status: "fail",
    message:
      "You've sent several letters recently. Please wait before sending another.",
  },
});

// Limit likes
const likeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 30,

  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    status: "fail",
    message:
      "Too many likes from this device. Please try again later.",
  },
});

// Public stats
router.get("/stats", letterController.getLetterStats);

// Public letters
router
  .route("/")
  .get(letterController.getAllLetters)
  .post(
    createLetterLimiter,
    letterController.createLetter
  );

// Public likes
router.patch(
  "/:id/like",
  likeLimiter,
  letterController.likeLetter
);

// Admin only
router.delete(
  "/:id",
  adminController.protectAdmin,
  letterController.deleteLetter
);

module.exports = router;