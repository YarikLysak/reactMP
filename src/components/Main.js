import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Home, PageNotFound, Footer } from "./Core";
import { theme, useStyles } from "./Main.styles";
import { selectSearch } from "../store/actions/actionCreators";

const Main = () => {
  const { wrapper, contentWrapper } = useStyles();
  const dispatch = useDispatch();
  const onSelectSearch = () => dispatch(selectSearch());
  const { movieView } = useSelector((state) => state.movies);

  return (
    <div className={wrapper}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className={contentWrapper}>
            <Header movieView={movieView} selectSearch={onSelectSearch} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/**" component={PageNotFound} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Main;
