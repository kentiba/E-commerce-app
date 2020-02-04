import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "./user.types";

//google
export const googleSigninStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

//email
export const emailSigninStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signinSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signinFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

//signout
export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = err => ({
  type: SIGN_OUT_FAILURE,
  payload: err
});

//signup

export const signUpStart = userInfo => ({
  type: SIGN_UP_START,
  payload: userInfo
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = err => ({
  type: SIGN_UP_FAILURE,
  payload: err
});
