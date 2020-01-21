import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default cart;
