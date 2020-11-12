import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";

import Routes from "./Routes";

import { Header, Footer } from "./Core";
import { theme, useStyles } from "./Main.styles";
import { selectSearch } from "../store/actions/moviesActionCreators";
import { useMovieView } from "../store/selectors/moviesStateSelector";

const Main = ({ Router, location, context, store }) => {
  const { wrapper, contentWrapper } = useStyles();
  const dispatch = useDispatch();
  const onSelectSearch = () => dispatch(selectSearch());
  const movieView = useSelector(useMovieView);

  return (
    <Provider store={store}>
      <div className={wrapper}>
        <ThemeProvider theme={theme}>
          <Router location={location} context={context}>
            <div className={contentWrapper}>
              <Header movieView={movieView} selectSearch={onSelectSearch} />
              <Switch>
                <Routes />
              </Switch>
            </div>
          </Router>
          <Footer />
        </ThemeProvider>
      </div>
    </Provider>
  );
};

export default Main;
