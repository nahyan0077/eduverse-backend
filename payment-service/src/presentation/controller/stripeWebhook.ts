import { Request, Response } from "express";
import Stripe from "stripe";

export const stripeWebhookHandler = async (req: Request, res: Response) => {

    if (!process.env.STRIPE_SECRET_KEY) {
        console.log("Stripe secret key is not found in env");
        return res.status(500).send("Internal server error: Stripe secret key is missing");
    }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-04-10' });

  const sig = req.headers['stripe-signature'];
  if (sig == null) {
    throw new Error("No stripe signature found!");
  }
  let event;

  try {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
        console.log("Stripe webhook key is not found in env");
        return res.status(500).send("Internal server error: Stripe webhook key is missing");
    }
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Handle successful payment here
  } else if (event.type === 'checkout.session.async_payment_failed' || event.type === 'checkout.session.expired') {
    const session = event.data.object;

    // Handle payment failure here
  }

  res.json({ received: true });
};
