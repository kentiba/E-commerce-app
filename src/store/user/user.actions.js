import { SET_CURRENT_USER } from "./user.types";

//set currentUser
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};
