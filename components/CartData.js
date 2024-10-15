"use client";

import React, { createContext, useContext, useState } from "react";

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [cartCount, setCartCount] = useState(0);
  // const cartTotal = cartItems.reduce(
  //   (total, item) => total + item.totalPrice,
  //   0,
  // );

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        addToCart
        // cartItems,
        // cartTotal,
        // addItemToCart,
        // removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};
