import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import * as serviceWorker from "./service-worker";
import "./index.css";

import persistedRedcuer from "./store/rootReducer";
import rootSaga from "./store/rootSaga";

//create store and connect redux to redux-devtools
const sagaMiddleware = createSagaMiddleware();

let store;
if (process.env.NODE_ENV === "production") {
  store = createStore(persistedRedcuer, applyMiddleware(sagaMiddleware));
} else {
  store = createStore(
    persistedRedcuer,
    compose(
      applyMiddleware(sagaMiddleware, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

// add rootSaga to sagamiddleware
sagaMiddleware.run(rootSaga);

//redux-persist
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
