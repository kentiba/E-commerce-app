import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = urlParam =>
  createSelector([selectShopCollection], collections =>
    collections ? collections[urlParam] : null
  );

export const errorMessage = createSelector(
  [selectShop],
  shop => shop.errorMessage
);

export const isFetching = createSelector([selectShop], shop => shop.isFetching);
