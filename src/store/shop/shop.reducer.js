import { UPDATE_COLLECTIONS } from "./shop.types";
const initState = {
  collections: {}
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
