import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main";

import configureStore from "./helper/configureStore";
import "./assets/styles/main.css";
import "./assets/styles/fonts.css";

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
  <Main Router={BrowserRouter} store={store} />,
  document.querySelector("#container")
);
