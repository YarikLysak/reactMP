import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  fetchMovies,
  fetchGenres,
  fetchSortBy,
  selectMovie,
  selectSortedBy,
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

const ClassList = ({
  movieList,
  genres,
  sortBy,
  fetchMovies,
  fetchGenres,
  fetchSortBy,
  selectMovie,
  selectSortedBy,
}) => {
  const { cardsListWrapper } = useStyles();

  useEffect(() => {
    fetchMovies();
    fetchGenres();
    fetchSortBy();
  }, []);

  return (
    <div className={cardsListWrapper}>
      <CardListHead
        count={movieList.length}
        genres={genres}
        sortBy={sortBy}
        selectSortedBy={selectSortedBy}
      />
      <Grid container spacing={5}>
        {movieList.map((movie) => (
          <Grid item xs={4} key={movie.id}>
            <CardItem movie={movie} selectMovie={selectMovie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ movies: { movieList }, genres, sortBy }) => {
  return {
    movieList,
    genres,
    sortBy,
  };
};

export default connect(mapStateToProps, {
  fetchMovies,
  fetchGenres,
  fetchSortBy,
  selectMovie,
  selectSortedBy,
})(ClassList);
