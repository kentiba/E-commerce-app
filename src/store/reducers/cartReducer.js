import { TOGGLE_CART_HIDDEN } from "../actions/actionTypes";
const initState = {
  hidden: false
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
