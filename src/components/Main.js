import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import { Header, Search, Footer } from "./Core";
import CardList from "./CardList";
import ErrorBoundary from "./ErrorBoundary";

import { theme, useStyles } from "./Main.styles";
import "../assets/styles/main.css";

const Main = () => {
  const { wrapper } = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={wrapper}>
          <Search />
          <ErrorBoundary>
            <CardList />
          </ErrorBoundary>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Main;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
