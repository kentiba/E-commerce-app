const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

//load .env in development
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

//cors & body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

port = process.env.PORT || 5000;

//routes
app.post("/payment", async (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  await stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeRes) {
      res.status(200).send({ success: stripeRes });
    } else {
      res.status(500).send({ error: stripeErr });
    }
  });
});

//server  react application in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server running on port " + port);
});
