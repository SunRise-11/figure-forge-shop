import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = await req.json();
  let items = data.item;
  let lineItem = [];
  for (var i = 0; i < items.length; i++) {
    lineItem.push({
      price_data: {
        currency: "eur",
        product_data: {
          name: items[i].name,
          images: [items[i].image],
        },
        unit_amount: items[i].price + "00",
      },
      quantity: 1,
    });
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineItem,
    mode: "payment",
    success_url: "http://localhost:3000/order/success",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json(session.url);
}
