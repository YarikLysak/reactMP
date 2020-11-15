import { useContext, useEffect } from "react";
import AppContext from "./AppContext";

export default (getPromises, dep) => {
  const context = useContext(AppContext);
  useEffect(() => {
    getPromises();
  }, dep);

  if (typeof window === "undefined") {
    context.initPromises.push(...(getPromises() || []));
  }
};
