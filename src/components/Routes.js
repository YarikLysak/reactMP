import React from "react";
import { Redirect, Route } from "react-router";
import { Home, PageNotFound } from "./Core";

export default () => {
  return (
    <>
      <Route path="/" exact render={() => <Redirect to="/search" />} />
      <Route
        path={["/search", "/search?=:searchTerm", "/film/:id"]}
        component={Home}
      />
      <Route path={["", "/404"]} component={PageNotFound} />
    </>
  );
};
