import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../store/reducers";

export default (initialState) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
};
