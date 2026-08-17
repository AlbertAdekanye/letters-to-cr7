const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.post("/login", adminController.loginAdmin);

router.get(
  "/check",
  adminController.protectAdmin,
  (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        admin: {
          id: req.admin._id,
          email: req.admin.email,
        },
      },
    });
  }
);

module.exports = router;