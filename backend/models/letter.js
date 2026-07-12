const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      trim: true,
      default: "Anonymous Fan",
      maxlength: [50, "Nickname cannot exceed 50 characters"],
    },

    country: {
      type: String,
      trim: true,
      default: "🌍 Somewhere on Earth",
    },

    message: {
      type: String,
      required: [true, "Please write a message."],
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Letter = mongoose.model("Letter", letterSchema);

module.exports = Letter;