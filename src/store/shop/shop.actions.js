import { UPDATE_COLLECTIONS } from "./shop.types";

//update collections
export const updateCollections = collection => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collection
  };
};
