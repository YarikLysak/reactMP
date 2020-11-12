import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import createStoreHelper from "./helper/createStore";
import Main from "./components/Main";

import "./assets/styles/main.css";
import "./assets/styles/fonts.css";

const store = createStoreHelper();

ReactDOM.hydrate(
  <Main Router={BrowserRouter} store={store} />,
  document.getElementById("container")
);
