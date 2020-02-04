import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";
import { onGoogleSignInStart, onEmailSignInStart } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ]);
}
