import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Home, PageNotFound, Footer } from "./Core";
import { theme, useStyles } from "./Main.styles";
import { selectSearch } from "../store/actions/actionCreators";
import { useMovieView } from "../store/selectors/moviesStateSelector";

const Main = () => {
  const { wrapper, contentWrapper } = useStyles();
  const dispatch = useDispatch();
  const onSelectSearch = () => dispatch(selectSearch());
  const movieView = useSelector(useMovieView);

  return (
    <div className={wrapper}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className={contentWrapper}>
            <Header movieView={movieView} selectSearch={onSelectSearch} />
            <Switch>
              <Route path={["/", "/film/:id"]} exact component={Home} />
              <Route path={["", "/404"]} component={PageNotFound} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Main;
