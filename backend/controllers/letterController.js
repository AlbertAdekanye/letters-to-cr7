const Letter = require("../models/letterModel");

exports.getAllLetters = async (req, res) => {
  try {
    const letters = await Letter.find().sort("-createdAt");

    res.status(200).json({
      status: "success",
      results: letters.length,
      data: {
        letters,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.createLetter = async (req, res) => {
  try {
    const letter = await Letter.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        letter,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.likeLetter = async (req, res) => {
  try {
    const letter = await Letter.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { likes: 1 },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!letter) {
      return res.status(404).json({
        status: "fail",
        message: "Letter not found.",
      });
    }

    res.status(200).json({
      status: "success",
      data: letter,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};