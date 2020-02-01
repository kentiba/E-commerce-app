import {
  FETCH_COLLECTIONS_FILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from "./shop.types";
import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../firebase/firebase.utils";

//start fetching collections
export const fetchCollectionStart = () => {
  return {
    type: FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionSuccess = collections => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  };
};

export const fetchCollectionFailure = err => {
  return {
    type: FETCH_COLLECTIONS_FILURE,
    payload: err
  };
};

//fetching collectiong
export const fetchCollectionStartAsync = () => {
  return dispatch => {
    //// IMPORTING COLLECTIONS FROM FIREBASE ////
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(snapShot => {
        const collectionMap = convertCollectionsSnapShotToMap(snapShot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(err => dispatch(fetchCollectionFailure(err.message)));
  };
};
