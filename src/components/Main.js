import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import { HeaderContainer, Footer } from "./Core";
import CardList from "./CardList";
import ErrorBoundary from "./ErrorBoundary";
import customHook from "./customHook";

import { genres, sortBy, cardsList } from "../assets/mockData";
import { theme, useStyles } from "./Main.styles";
import "../assets/styles/main.css";
import "../assets/styles/fonts.css";

const Main = () => {
  const { wrapper } = useStyles();
  const [state, dispatch] = customHook();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setMovieList(cardsList), 1000);
    return () => setTimeout(timer);
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={wrapper}>
          <HeaderContainer
            card={movieList.find(({ id }) => id === state.selectedItemId)}
            isSearch={state.isSearch}
            setViewState={dispatch}
          />
          <ErrorBoundary>
            <CardList
              setViewState={dispatch}
              genres={genres}
              sortBy={sortBy}
              cardsList={movieList}
            />
          </ErrorBoundary>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Main;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
