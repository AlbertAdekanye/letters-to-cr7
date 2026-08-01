const dns = require("node:dns");
const mongoose = require("mongoose");

// Force Node to use public DNS servers for MongoDB SRV lookups.
// This must run before mongoose.connect().
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.DATABASE,
      {
        serverSelectionTimeoutMS: 15000,
      }
    );

    console.log(
      `✅ MongoDB Connected: ${connection.connection.host}`
    );

    return connection;
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error);
    throw error;
  }
};

module.exports = connectDB;