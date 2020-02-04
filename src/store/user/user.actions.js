import {
  EMAIL_SIGN_IN_START,
  SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS
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

export const SigninSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const SigninFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});
