import { combineReducers } from "redux";
import userReducer from "./userReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer
});

export default rootReducer;
