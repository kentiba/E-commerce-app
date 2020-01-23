import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

//set currentUser
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

// add item to cart
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
