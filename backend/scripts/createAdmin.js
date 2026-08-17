const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const connectDB = require("../config/database");
const Admin = require("../models/adminModel");

const createAdmin = async () => {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      console.log(
        "❌ ADMIN_EMAIL and ADMIN_PASSWORD must exist in config.env"
      );

      process.exit(1);
    }

    const existingAdmin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");
      process.exit(0);
    }

    const admin = await Admin.create({
      email,
      password,
    });

    console.log(`✅ Admin created successfully: ${admin.email}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to create admin:");
    console.error(error);

    process.exit(1);
  }
};

createAdmin();