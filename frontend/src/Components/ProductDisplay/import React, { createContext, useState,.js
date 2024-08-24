import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [all_products, setAll_products] = useState([]);
  const url = "http://localhost:4000";

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (productId) => {
    setCartItems((prevCartItems) => {
      const newCartItems = {
        ...prevCartItems,
        [productId]: (prevCartItems[productId] || 0) + 1,
      };
      return newCartItems;
    });

    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { userId: token, itemId: productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Failed to add to cart:", error);
      }
    }
  };

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
        await axios.post(
          `${url}/api/cart/remove`,
          { userId: token, itemId: productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Failed to remove from cart:", error);
      }
    }
  };

  const fetchProductList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      setAll_products(response.data.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const localCartData = async () => {
    if (token) {
      try {
        const response = await axios.get(`${url}/api/cart/get`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(response.data.cartData || {});
      } catch (error) {
        console.error("Failed to load cart data:", error);
      }
    }
  };

  useEffect(() => {
    fetchProductList();
    localCartData();
  }, [token]);

  const getTotalCartAmount = () => {
    return Object.entries(cartItems || {}).reduce((total, [id, qty]) => {
      const product = all_products.find((p) => p._id === id);
      return total + (product ? product.price * qty : 0);
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems || {}).reduce((total, qty) => total + qty, 0);
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    url,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
