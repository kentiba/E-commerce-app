import { takeLatest, put, call, all } from "redux-saga/effects";
import { FETCH_COLLECTIONS_START } from "./shop.types.js";
import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

export function* fetchCollectionAsync() {
  try {
    //// IMPORTING COLLECTIONS FROM FIREBASE, ASYNC ////
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapShotToMap, snapShot); // call take a function as a first argument and the parameter for the function as a second,
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
