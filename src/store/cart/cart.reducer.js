import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from "./cart.types";
import { addToCart, removeFromCart } from "./cart.utils";
const initState = {
  hidden: false,
  cartItems: []
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
