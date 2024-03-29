const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/connect-db");
const router = require("./routes/tasks.route");

const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://siva-mern-task.onrender.com"],
  })
);
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/tasks", router);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
