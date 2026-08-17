const express = require("express");
const cors = require("cors");

const letterRoutes = require("./routes/letterRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Letters to CR7 API is running 🚀",
  });
});

app.use("/api/v1/letters", letterRoutes);
app.use("/api/v1/admin", adminRoutes);

module.exports = app;