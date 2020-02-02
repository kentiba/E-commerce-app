import {
  SET_CURRENT_USER,
  EMAIL_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_SUCCESS
} from "./user.types";
const initState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case EMAIL_SIGN_IN_SUCCESS:
    case GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
