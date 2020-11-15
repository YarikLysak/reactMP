import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";

import Routes from "./Routes";

import { Header, Footer } from "./Core";
import { theme, useStyles } from "./Main.styles";
import AppContext from "../store/AppContext";

const Main = ({ Router, location, initPromises, context, store }) => {
  const { wrapper, contentWrapper } = useStyles();

  useEffect(() => {
    const styles = [
      "#jss-server-side",
      "#global-css-server-side",
      "#global-fonts-server-side",
    ];

    styles.forEach((selector) => {
      const item = document.querySelector(selector);
      if (item) {
        item.parentElement.removeChild(item);
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ initPromises }}>
      <Provider store={store}>
        <div className={wrapper}>
          <ThemeProvider theme={theme}>
            <Router location={location} context={context}>
              <div className={contentWrapper}>
                <Header />
                <Routes />
              </div>
            </Router>
            <Footer />
          </ThemeProvider>
        </div>
      </Provider>
    </AppContext.Provider>
  );
};

export default Main;
