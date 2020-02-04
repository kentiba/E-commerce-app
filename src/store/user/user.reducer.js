import { SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from "./user.types";
const initState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
