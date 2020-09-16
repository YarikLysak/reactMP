import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { HeaderContainer, Footer } from "./Core";
import CardList from "./CardList";
import ErrorBoundary from "./ErrorBoundary";

import { theme, useStyles } from "./Main.styles";

const Main = () => {
  const { wrapper } = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={wrapper}>
          <HeaderContainer />
          <ErrorBoundary>
            <CardList />
          </ErrorBoundary>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Main;
