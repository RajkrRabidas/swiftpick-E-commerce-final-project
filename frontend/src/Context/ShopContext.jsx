import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const request = new XMLHttpRequest();
request.open("POST", "http://localhost:4000/api/cart/add");
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader(
  "Authorization",`Bearer ${localStorage.getItem("authToken")}`
); // Replace with your token storage

// ... rest of your code

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : {}; // Provide a default empty object if undefined
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [all_products, setAll_products] = useState([]);
  const url = "http://localhost:4000";

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Decode the user ID from the JWT token
  const getUserIdFromToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken && decodedToken.id) {
        return decodedToken.id; // Use 'id' instead of 'userId'
      } else {
        console.error("Token does not contain id.");
        return null;
      }
    } catch (error) {
      console.error("Failed to decode token:", error.message);
      return null;
    }
  };

  // Function to add a product to the cart
  const addToCart = async (productId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productId]: (prevCartItems[productId] || 0) + 1,
    }));

    // Send a request to the backend to add the item to the cart in the database
    if (token) {
      try {
        const userId = getUserIdFromToken(token);
        if (userId) {
          await axios.post(
            `${url}/api/cart/add`,
            { userId, itemId: productId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        } else {
          console.error("User ID could not be retrieved from token.");
        }
      } catch (error) {
        console.error("Failed to add to cart:", error);
      }
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = async (productId) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[productId] > 1) {
        newCartItems[productId] -= 1;
      } else {
        delete newCartItems[productId];
      }
      return newCartItems;
    });

    if (token) {
      try {
        const userId = getUserIdFromToken(token);
        if (userId) {
          await axios.post(
            `${url}/api/cart/remove`,
            { userId, itemId: productId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        } else {
          console.error("User ID could not be retrieved from token.");
        }
      } catch (error) {
        console.error("Failed to remove from cart:", error);
      }
    }
  };

  // Function to get the total number of items in the cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, numItems) => total + numItems, 0);
  };

  // Function to get the total cost of items in the cart
  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const itemInfo = all_products.find((product) => product._id === itemId);
      return itemInfo ? total + itemInfo.price * quantity : total;
    }, 0);
  };

  // Function to fetch the list of products from the backend
  const fetchProductList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      setAll_products(response.data.data);
    } catch (error) {
      console.error("Failed to fetch products:", error.response || error.message);
    }
  };

  // Function to load cart data from the backend
  const loadCartData = async () => {
    if (token) {
      try {
        const userId = getUserIdFromToken(token);
        if (userId) {
          const response = await axios.get(`${url}/api/cart/get`, {
            params: { userId },
            headers: { Authorization: `Bearer ${token}` },
          });
          setCartItems(response.data.cartData);
        }
      } catch (error) {
        console.error("Failed to load cart data:", error);
      }
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      await fetchProductList();
      await loadCartData();
    };
    initializeData();
  }, [token]);

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    url,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
