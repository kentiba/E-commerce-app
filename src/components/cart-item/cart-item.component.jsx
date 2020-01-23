import React from "react";
import "./cart-item.styles.scss";
const cartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="Product" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;
