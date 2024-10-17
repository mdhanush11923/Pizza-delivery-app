'use client'
import React, { useEffect, useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import { useCart } from "./CartData";

export default function Orders() {
  const {orders} = useCart();
  return (
    <div className="flex w-full h-screen gap-4 items-center justify-center bg-dark">
      {orders.length === 0 ? (
        <div className="flex gap-2 items-center">
          <HistoryIcon />
          <h1>No orders history</h1>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-white rounded-lg p-5">
          <h1 className="text-2xl font-bold mb-4">Order History</h1>
          <ul className="space-y-4">
            {orders.map((order, index) => (
              <li key={index} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-semibold">Order #{order.orderId}</h2>
                    <p>
                      Ordered on: {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                    <p>Total: ₹{order.totalAmount?.toFixed(2) || "N/A"}</p>
                  </div>
                  <div className="flex gap-2">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <p className="font-medium">{item.pizzaName}</p>
                        <p>Size: {item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ₹{item.totalPrice?.toFixed(2) || "N/A"}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
