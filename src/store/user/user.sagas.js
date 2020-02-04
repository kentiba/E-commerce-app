import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} from "./user.types";

import {
  signinFailure,
  signinSuccess,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

export function* getSnapShotFromUser(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapShot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (err) {
    yield put(signinFailure(err));
  }
}

//Google sign in
export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUser(user);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

//Email sign in
export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUser(user);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUser(userAuth);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

export function* signInAfterSignUP({ payload: { user, additionalData } }) {
  try {
    yield getSnapShotFromUser(user, additionalData);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOutUser);
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUpUser);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUP);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
