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
    let { nickname, country, message } = req.body;

    // Message must be a string
    if (typeof message !== "string") {
      return res.status(400).json({
        status: "fail",
        message: "Please write a message.",
      });
    }

    // Remove unnecessary whitespace
    message = message.trim();

    // Reject empty messages
    if (!message) {
      return res.status(400).json({
        status: "fail",
        message: "Your letter cannot be empty.",
      });
    }

    // Minimum meaningful length
    if (message.length < 10) {
      return res.status(400).json({
        status: "fail",
        message: "Your letter is too short.",
      });
    }

    // Maximum length
    if (message.length > 500) {
      return res.status(400).json({
        status: "fail",
        message: "Your letter cannot exceed 500 characters.",
      });
    }

    // Clean optional fields
    if (typeof nickname === "string") {
      nickname = nickname.trim().slice(0, 50);
    }

    if (typeof country === "string") {
      country = country.trim().slice(0, 100);
    }

    const letter = await Letter.create({
      nickname: nickname || "Anonymous Fan",
      country: country || "🌍 Somewhere on Earth",
      message,
    });

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
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Community statistics
exports.getLetterStats = async (req, res) => {
  try {
    const stats = await Letter.aggregate([
      {
        $group: {
          _id: null,
          totalLetters: {
            $sum: 1,
          },
          totalLikes: {
            $sum: {
              $ifNull: ["$likes", 0],
            },
          },
          countries: {
            $addToSet: "$country",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalLetters: 1,
          totalLikes: 1,
          totalCountries: {
            $size: "$countries",
          },
        },
      },
    ]);

    const result =
      stats.length > 0
        ? stats[0]
        : {
            totalLetters: 0,
            totalLikes: 0,
            totalCountries: 0,
          };

    res.status(200).json({
      status: "success",
      data: {
        stats: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.deleteLetter = async (req, res) => {
  try {
    const letter = await Letter.findByIdAndDelete(req.params.id);

    if (!letter) {
      return res.status(404).json({
        status: "fail",
        message: "Letter not found.",
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};