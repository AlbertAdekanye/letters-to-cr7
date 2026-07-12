const express = require("express");
const letterController = require("../controllers/letterController");

const router = express.Router();

router
  .route("/")
  .get(letterController.getAllLetters)
  .post(letterController.createLetter);

router.patch(
  "/:id/like",
  letterController.likeLetter
);
module.exports = router;