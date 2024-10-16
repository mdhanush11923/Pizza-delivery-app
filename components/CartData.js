"use client";

import React, { createContext, useContext, useState } from "react";

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Count of total items in the cart
const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  // Calculate the total price of the items in the cart
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.totalPrice * item.quantity,
    0,
  );

  // Function to add items to the cart
  const addItemToCart = (pizzaItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.pizzaId === pizzaItem.pizzaId && item.size === pizzaItem.size,
      );

      if (existingItem) {
        // If the pizza already exists in the cart (same size), update its quantity and total price
        return prevItems.map((item) =>
          item.pizzaId === pizzaItem.pizzaId && item.size === pizzaItem.size
            ? {
                ...item,
                quantity: pizzaItem.quantity,
                totalPrice: pizzaItem.totalPrice,
              }
            : item,
        );
      } else {
        // If the pizza does not exist in the cart, add it
        return [...prevItems, pizzaItem];
      }
    });
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (pizzaId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.pizzaId === pizzaId && item.size === size),
      ),
    );
  };

  // Function to update the quantity of an item in the cart
  const updateItemQuantity = (pizzaId, size, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.pizzaId === pizzaId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartTotal,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
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
