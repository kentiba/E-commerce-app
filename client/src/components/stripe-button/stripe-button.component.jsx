import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./stripe-button.styles.scss";

const stripeCheckoutButoon = ({ price }) => {
  //stripe requires that prices should be in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_vbCT19MHvzmw2rkhKKpXjOTD";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert("Payment successful!");
      })
      .catch(err => {
        console.log(err);
        alert(
          "There was an issue with your payment. Please make sure to use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      stripeKey={publishableKey}
      amount={priceForStripe}
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default stripeCheckoutButoon;
