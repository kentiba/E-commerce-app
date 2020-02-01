import {
  FETCH_COLLECTIONS_FILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from "./shop.types";
const initState = {
  collections: [],
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case FETCH_COLLECTIONS_FILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: "fffff"
      };
    default:
      return state;
  }
};

export default shopReducer;
