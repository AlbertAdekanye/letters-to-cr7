const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

const signToken = (adminId) => {
  return jwt.sign(
    {
      id: adminId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    }
  );
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password.",
      });
    }

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!admin) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password.",
      });
    }

    const isPasswordCorrect = await admin.correctPassword(
      password,
      admin.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password.",
      });
    }

    const token = signToken(admin._id);

    res.status(200).json({
      status: "success",
      token,
      data: {
        admin: {
          id: admin._id,
          email: admin.email,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.protectAdmin = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in.",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.status(401).json({
        status: "fail",
        message: "Admin no longer exists.",
      });
    }

    req.admin = admin;

    next();
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid or expired token.",
    });
  }
};