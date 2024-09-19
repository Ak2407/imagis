import { NextRequest } from "next/server";
import Stripe from "stripe";
import url from "url";

interface StripeRequest {
  email: string;
}

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);
export async function POST(request: NextRequest) {
  const { email }: StripeRequest = await request.json();
  try {
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_KEY!,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel?session_id={CHECKOUT_SESSION_ID}`,
    });
    console.log("session::::::::::::::::", session);
    return Response.json(session);
  } catch (error: any) {
    return Response.json({ statusCode: 500, message: error.message });
  }
}
