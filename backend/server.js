const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const connectDB = require("./config/database");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `🚀 Server running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "❌ Server did not start because the database connection failed."
    );

    process.exit(1);
  }
};

startServer();