import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  fetchMovies,
  fetchGenres,
  fetchSortBy,
} from "../../store/actions/actionCreators";

import CardListHead from "./CardListHead";
import CardItem from "./CardItem";

const useStyles = makeStyles((theme) => ({
  cardsListWrapper: {
    width: "100%",
    maxWidth: "1400px",
    padding: "0 3em 3em",
    margin: "0.5em 0 0",
    backgroundColor: theme.darkGray,
  },
}));

const ClassList = () => {
  const { cardsListWrapper } = useStyles();

  const {
    movies: { filteredMovieList },
    genres,
    sortBy,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
    dispatch(fetchSortBy());
  }, []);

  return (
    <div className={cardsListWrapper}>
      <CardListHead count={filteredMovieList.length} genres={genres} />
      <Grid container spacing={5}>
        {!sortBy.selected
          ? filteredMovieList.map((movie) => (
              <Grid item xs={4} key={movie.id}>
                <CardItem movie={movie} />
              </Grid>
            ))
          : filteredMovieList
              .sort((a, b) => {
                if (a[sortBy.selected.title] > b[sortBy.selected.title]) {
                  return -1;
                } else if (
                  a[sortBy.selected.title] < b[sortBy.selected.title]
                ) {
                  return 1;
                } else {
                  0;
                }
              })
              .map((movie) => (
                <Grid item xs={4} key={movie.id}>
                  <CardItem movie={movie} />
                </Grid>
              ))}
      </Grid>
    </div>
  );
};

export default ClassList;
