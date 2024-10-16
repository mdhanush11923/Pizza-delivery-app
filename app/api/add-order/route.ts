// app/api/add-order/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { paymentId, cartItems, totalPrice } = body;

  if (!paymentId || !cartItems || cartItems.length === 0 || !totalPrice) {
    return NextResponse.json({ success: false, message: 'Invalid order data' }, { status: 400 });
  }

  try {
    // Simulating an order entry
    const newOrder = {
      id: Date.now(),
      paymentId,
      cartItems,
      totalPrice,
      date: new Date(),
    };

    return NextResponse.json({ success: true, message: 'Order added successfully', order: newOrder });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to add order' }, { status: 500 });
  }
}
