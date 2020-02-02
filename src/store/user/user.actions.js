import {
  SET_CURRENT_USER,
  EMAIL_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS
} from "./user.types";

//set currentUser
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
//google
export const googleSigninStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const googleSigninSuccess = user => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSigninFailure = error => ({
  type: GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

//email
export const emailSigninStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const emailSigninSuccess = user => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSigninFailure = error => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: error
});
