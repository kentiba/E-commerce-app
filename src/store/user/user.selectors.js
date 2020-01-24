import { createSelector } from "reselect";
// this will make sure the user reducer wont get rerendered when there is a change in  the state unrelated to user , like cart reducer for example.
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
