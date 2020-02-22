import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { clearCart } from "../../store/cart/cart.actions";
import "./stripe-button.styles.scss";

const stripeCheckoutButton = ({ price, history, clearCart }) => {
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
        clearCart();
        history.push("/done");
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default withRouter(
  connect(null, mapDispatchToProps)(stripeCheckoutButton)
);
