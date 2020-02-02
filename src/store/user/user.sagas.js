import { takeLatest, put, call } from "redux-saga/effects";
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from "./user.types";

import {
  googleSigninFailure,
  googleSigninSuccess,
  emailSigninStart,
  emailSigninFailure
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

//////GOOOGLE//////////
export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(
      googleSigninSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );
  } catch (err) {
    yield put(googleSigninFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, googleSignInAsync);
}
