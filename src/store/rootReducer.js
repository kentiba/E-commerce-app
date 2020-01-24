import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

//redux persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "directory"] //here we tell the config that cart reducer is the only reducer we want to persist, since user is handaled by firebase
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
