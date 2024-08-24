const express = require("express")
const { loginUser, registerUser} = require("../controllers/userController.js"); 

const userRoute = express.Router();

userRoute.post("/register", registerUser)
userRoute.post("/login",loginUser)

module.exports = userRoute;