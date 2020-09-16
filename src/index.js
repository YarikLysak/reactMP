import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducers from "./store/reducers";
import Main from "./components/Main";

import "./assets/styles/main.css";
import "./assets/styles/fonts.css";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector("#container")
);
