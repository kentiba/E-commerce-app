import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";

//create store and connect redux to redux-devtools
let store;
if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer, compose(applyMiddleware(thunk)));
} else {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
