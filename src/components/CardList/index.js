import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { fetchGenres, fetchSortBy } from "../../store/actions/actionCreators";
import {
  useFilteredMoviesState,
  useGenresState,
  useSortByState,
} from "../../store/selectors/moviesStateSelector";
import { fetchAllMovies } from "../../store/actions/moviesActionCreators";
import useInitPromisesHook from "../../store/useInitPromises.hook";

import CardListHead from "./CardListHead";
import CardItem from "./CardItem";
import EmptyPage from "../Core/EmptyPage";

const useStyles = makeStyles((theme) => ({
  cardsListWrapper: {
    width: "100%",
    padding: "0 3em 3em",
    margin: "0.5em 0 0",
    backgroundColor: theme.darkGray,
  },
}));

const CardList = () => {
  const { cardsListWrapper } = useStyles();
  const genres = useSelector(useGenresState);
  const sortBy = useSelector(useSortByState);
  const filteredMovieList = useSelector(useFilteredMoviesState);
  const dispatch = useDispatch();

  useInitPromisesHook(
    () => [
      dispatch(fetchAllMovies()),
      dispatch(fetchGenres()),
      dispatch(fetchSortBy()),
    ],
    [dispatch]
  );

  const sortingMovie = (list, field) =>
    list.sort((a, b) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        0;
      }
    });

  const getMovieList = useCallback(() => {
    return sortBy.selected
      ? sortingMovie(filteredMovieList, sortBy.selected.title)
      : filteredMovieList;
  }, [filteredMovieList, sortBy]);

  return (
    <div className={cardsListWrapper}>
      <CardListHead count={filteredMovieList.length} genres={genres} />
      <Grid container spacing={6}>
        {filteredMovieList.length ? (
          getMovieList().map((movie) => (
            <Grid item sm={4} lg={3} key={movie.id}>
              <CardItem movie={movie} />
            </Grid>
          ))
        ) : (
          <EmptyPage />
        )}
      </Grid>
    </div>
  );
};

export default CardList;
