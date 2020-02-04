import { takeLatest, put, call } from "redux-saga/effects";
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from "./user.types";

import { SigninFailure, SigninSuccess } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

export function* getSnapShotFromUser(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();
    yield put(SigninSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (err) {
    yield put(SigninFailure(err));
  }
}

//Google sign in
export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUser(user);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}

//Email sign in
export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUser(user);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, emailSignInAsync);
}
