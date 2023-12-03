const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(cors());

const YOUR_DOMAIN = "http://localhost:4242";

app.post("/create-checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_options: [
      { shipping_rate: "shr_1MehT0CQ7FZv4IntA9J82iTh" },
      { shipping_rate: "shr_1MehUqCQ7FZv4InteNwPyGiG" },
    ],
    line_items: req.body.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    }),
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/account/cart`,
  });
  res.send({ url: session.url });
});

app.listen(4242, () => console.log("Running on port 4242"));
