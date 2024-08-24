require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const connectDB = require("./config/db.js");
const productRoute = require("./routes/productRoute.js"); // Changed import
const userRoute = require("./routes/userRoute.js");
const cartRouter = require("./routes/cartRoute.js");
const orderRouter = require("./routes/orderRoute.js");

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoint
app.use("/api/product", productRoute);
app.use("/images",express.static("uploads"))
app.use("/api/user",userRoute)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("APP Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
