import { useReducer } from "react";

const customHook = (
  init = {
    isSearch: true,
    selectedItem: null,
  }
) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "movieView": {
        return { isSearch: false, selectedItemId: action.payload };
      }
      case "search": {
        return { isSearch: true, selectedItemId: null };
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, init);

  return [state, dispatch];
};

export default customHook;
