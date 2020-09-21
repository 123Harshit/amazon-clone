const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HSzEQAUIwgHeE2sPXljb9Azm8p6IMbF34l3IWTFcC9rn0KmlVSjrmuTzqGkelKRPGYM3VTafEoMMyt5v6Kdajmc00sVw2Ie2U"
);

//Setting an API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved BOOM!! for this ammount >> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "inr",
  });
  //OK - Created Something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen Command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/e-clone-29ada/us-central1/api
