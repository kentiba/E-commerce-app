import { createSelector } from "reselect";
// this will make sure the cart reducer wont get rerendered when there is a change in  the state unrelated to cart , like user reducer for example.
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
