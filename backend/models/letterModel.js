const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      default: "Anonymous Fan",
      trim: true,
    },

    country: {
      type: String,
      default: "🌍 Somewhere on Earth",
    },

    message: {
      type: String,
      required: [true, "A message is required."],
      trim: true,
      maxlength: 500,
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Letter", letterSchema);