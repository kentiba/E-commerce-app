import {
  FETCH_COLLECTIONS_FILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from "./shop.types";

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
