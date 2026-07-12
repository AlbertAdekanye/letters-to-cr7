const express = require("express");
const letterController = require("../controllers/letterController");

const router = express.Router();

router
  .route("/")
  .get(letterController.getAllLetters)
  .post(letterController.createLetter);

module.exports = router;