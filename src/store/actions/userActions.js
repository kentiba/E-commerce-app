import { SET_CURRENT_USER } from "./actionTypes";

//set currentUser
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};
