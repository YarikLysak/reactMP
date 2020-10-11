import React from "react";

import CardList from "../../CardList";
import ErrorBoundary from "../../ErrorBoundary";
import Heading from "../Heading";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Heading />
      <ErrorBoundary>
        <CardList />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
