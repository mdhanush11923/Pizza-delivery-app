"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.totalPrice * item.quantity,
    0,
  );

  const addItemToCart = (pizzaItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.pizzaId === pizzaItem.pizzaId && item.size === pizzaItem.size,
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.pizzaId === pizzaItem.pizzaId && item.size === pizzaItem.size
            ? {
                ...item,
                quantity: item.quantity + pizzaItem.quantity,
                totalPrice: pizzaItem.totalPrice,
              }
            : item,
        );
      } else {
        return [...prevItems, pizzaItem];
      }
    });
  };

  const removeItemFromCart = (pizzaId, size) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.pizzaId === pizzaId && item.size === size,
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevItems.filter(
            (item) => !(item.pizzaId === pizzaId && item.size === size),
          );
        } else {
          return prevItems.map((item) =>
            item.pizzaId === pizzaId && item.size === size
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
        }
      }
      return prevItems;
    });
  };

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

export const useCart = () => {
  return useContext(CartContext);
};
