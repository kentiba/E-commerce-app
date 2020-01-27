import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const stripeCheckoutButoon = ({ price }) => {
  //stripe requires that prices should be in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_vbCT19MHvzmw2rkhKKpXjOTD";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
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
