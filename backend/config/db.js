const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://atishRaj:atish889@cluster0.yo1bj.mongodb.net/swiptcart?"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};

module.exports = connectDB;
