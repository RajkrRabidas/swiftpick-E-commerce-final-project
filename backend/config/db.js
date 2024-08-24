const mongoose = require("mongoose");
const DATABASE = require("../config/db.js")

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};

module.exports = connectDB;
