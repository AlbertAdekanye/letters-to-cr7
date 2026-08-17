const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Admin email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Admin password is required."],
      minlength: 8,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
adminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

// Compare login password with hashed password
adminSchema.methods.correctPassword = async function (
  candidatePassword,
  adminPassword
) {
  return bcrypt.compare(candidatePassword, adminPassword);
};

module.exports = mongoose.model("Admin", adminSchema);