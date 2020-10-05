import React from "react";
import { Route, Switch } from "react-router-dom";

import Search from "../Search";
import CardDetails from "../../CardList/CardDetails";
import { useStyles } from "./styles";

const Heading = () => {
  const { headingWrapper, headingBg } = useStyles();

  return (
    <div className={headingWrapper}>
      <div className={headingBg}></div>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/film/:id" component={CardDetails} />
      </Switch>
    </div>
  );
};

export default Heading;
