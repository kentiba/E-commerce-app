import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM
} from "../actions/actionTypes";
import { addToCart } from "../utils/cart.utils";
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
    default:
      return state;
  }
};

export default cartReducer;
