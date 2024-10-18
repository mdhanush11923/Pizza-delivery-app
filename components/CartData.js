"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([
    {
  orderId: 1,
  items: [
    {
      pizzaId: 1,
      pizzaName: 'Margherita',
      quantity: 2,
      size: 'medium',
      baseId: 'b1',
      cheeseId: 'c1',
      sauceId: 's1',
      veggiesIds: ['v1'],
      totalPrice: 598
    },
    {
      pizzaId: 2,
      pizzaName: 'Pepperoni Heat',
      quantity: 1,
      size: 'large',
      baseId: 'b2',
      cheeseId: 'c1',
      sauceId: 's2',
      totalPrice: 449
    }
  ],
  totalAmount: 1047,
  orderDate: new Date(),
  customerName: 'John Doe',
  status: 'Pending'
}
  ]);

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

  const clearCart = () => {
    setCartItems([]);
  }

  // Function to add a new order
  const addNewOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartTotal,
        cartItems,
        addItemToCart,
        clearCart,
        removeItemFromCart,
        updateItemQuantity,
        orders,
        addNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
