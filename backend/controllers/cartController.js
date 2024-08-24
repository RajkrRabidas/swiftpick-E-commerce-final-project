const userModel = require("../models/userModel.js");

// Add item to user cart
const addToCart = async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};
    cartData[itemId] = (cartData[itemId] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};

// Remove item from user cart
const removeFromCart = async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = user.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId] > 1) {
        cartData[itemId] -= 1;
      } else {
        delete cartData[itemId];
      }

      await userModel.findByIdAndUpdate(userId, { cartData });
      return res.json({ success: true, message: "Item removed from cart" });
    } else {
      return res.status(400).json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.error("Failed to remove item from cart:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const getcart = async (req, res) => {
    const { userId } = req.query;
  
    try {
      // Attempt to find the user by ID
      const user = await userModel.findById(userId);
  
      // If user is not found, return a 404 response
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // If user is found, get the cart data or return an empty object if undefined
      const cartData = user.cartData || {};
  
      // Send the cart data as a response
      res.json({ success: true, cartData });
    } catch (error) {
      // Log the error and return a server error response
      console.error("Failed to get cart:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };
  

module.exports = {
  addToCart,
  removeFromCart,
  getcart,
};
