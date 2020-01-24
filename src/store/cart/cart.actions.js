import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from "./cart.types";

//set currentUser
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

// add item to cart
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

//clear items form cart
export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

// remove item from cart
export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});
