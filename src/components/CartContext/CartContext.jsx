

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const email = localStorage.getItem("user");

  // Fetch cart from backend if logged in
  useEffect(() => {
    if (email) {
      fetchCartFromBackend();
    } else {
      setCartItems([]);
    }
  }, [email]);

  // 🧩 Fetch from backend
  const fetchCartFromBackend = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/cart/${email}`);
      setCartItems(res.data.cart || []);
    } catch (err) {
      console.error("Error fetching cart:", err.response?.data || err.message);
    }
  };

  // ➕ Add product to cart (and backend)
  const addToCart = async (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product_id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product_id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product_id: product.id, quantity: 1, ...product }];
      }
    });

    if (email) {
      try {
        await axios.post("http://127.0.0.1:8000/api/cart/add", {
          email,
          product_id: product.id,
          quantity: 1,
        });
      } catch (err) {
        console.error("Error syncing addToCart:", err.response?.data || err.message);
      }
    }
  };

  // ❌ Remove product
  const removeFromCart = async (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );

    if (email) {
      try {
        await axios.post("http://127.0.0.1:8000/api/cart/remove", {
          email,
          product_id: productId,
        });
      } catch (err) {
        console.error("Error syncing removeFromCart:", err.response?.data || err.message);
      }
    }
  };

  // 🔄 Update quantity
  const updateQuantity = async (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === productId ? { ...item, quantity } : item
      )
    );

    if (email) {
      try {
        await axios.post("http://127.0.0.1:8000/api/cart/add", {
          email,
          product_id: productId,
          quantity, // optional: backend can replace or add
        });
      } catch (err) {
        console.error("Error syncing updateQuantity:", err.response?.data || err.message);
      }
    }
  };

  // 🧹 Clear cart
  const clearCart = async () => {
    setCartItems([]);
    if (email) {
      try {
        await axios.post("http://127.0.0.1:8000/api/cart/clear", { email });
      } catch (err) {
        console.error("Error clearing cart:", err.response?.data || err.message);
      }
    }
  };

  // 💰 Total price
  const getCartTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // 🛒 Total items
  const getCartCount = () =>
    cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

