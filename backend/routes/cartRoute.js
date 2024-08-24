const express = require("express");
const { addToCart, removeFromCart, getcart } = require("../controllers/cartController.js");
const authMiddleware = require("../Middleware/auth.js");

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware, addToCart)
cartRouter.post("/remove",authMiddleware, removeFromCart)
cartRouter.get('/get', authMiddleware, getcart);


module.exports = cartRouter;
