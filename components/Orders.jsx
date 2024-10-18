'use client'
import React, { useEffect, useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import { useCart } from "./CartData";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Orders() {
  const {orders} = useCart();
  return (
    <div className="flex min-h-screen gap-4 justify-center p-5 bg-dark">
      {orders.length === 0 ? (
        <div className="flex gap-2 items-center">
          <HistoryIcon />
          <h1>No orders history</h1>
        </div>
      ) : (
        <div className="w-full rounded-lg p-5">
          <h1 className="text-2xl font-bold mb-4">Order History</h1>
          <ul className="space-y-4">
            {orders.map((order, index) => (
              <li key={index} className="border-b border-gray-200 pb-4">
                <div className="flex gap-5 justify-between">
                  <Table
                    classNames={{
                      wrapper: "w-[250px] sm:w-full",
                    }}
                    aria-label="Example table with dynamic content"
                    color="success"
                    topContent={
                      <div className="flex justify-between">
                        <h2 className="font-semibold">
                          Order #{order.orderId}
                        </h2>
                        <p>
                          Ordered on:{" "}
                          {new Date(order.orderDate).toLocaleDateString()}
                        </p>
                      </div>
                    }
                    bottomContent={
                      <div className="flex justify-between">
                        <p>Total: ₹{order.totalAmount?.toFixed(2) || "N/A"}</p>
                        <p>Status: {order.status}</p>
                      </div>
                    }
                  >
                    <TableHeader>
                      <TableColumn width={300}>PIZZA NAME</TableColumn>
                      <TableColumn>SIZE</TableColumn>
                      <TableColumn>QUANTITY</TableColumn>
                      <TableColumn>PRICE</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {order.items.map((item, i) => (
                        <TableRow key={i}>
                          <TableCell>{item.pizzaName}</TableCell>
                          <TableCell>{item.size}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>
                            ₹{item.totalPrice?.toFixed(2) || "N/A"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
