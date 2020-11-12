import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../store/reducers";

export default function createStoreHelper() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
}
