import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Grid } from "@material-ui/core";

import { cardDetailsStyles } from "./styles";
import { fetchGenres } from "../../../store/actions/actionCreators";
import { fetchMovieById } from "../../../store/actions/moviesActionCreators";
import {
  useGenresListState,
  useSelectedMovie,
} from "../../../store/selectors/moviesStateSelector";

const CardDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const movie = useSelector(useSelectedMovie);
  const genreList = useSelector(useGenresListState);

  useEffect(() => {
    console.log("useEffect", id, movie, genreList);
    if (!movie || !genreList.length || id !== movie.id) {
      dispatch(fetchMovieById(id, history));
      dispatch(fetchGenres());
    }
  });

  const setRateColor = (rate) => {
    if (rate > 8.5) {
      return "limegreen";
    } else if (rate > 5) {
      return "yellow";
    }
    return "#f50057";
  };

  const cardStyles = cardDetailsStyles({
    link: movie?.photo.link,
    rateColor: setRateColor(movie?.rate),
  });

  return (
    <Grid container spacing={6} className={cardStyles.cardDetail}>
      <Grid item xs={4} className={cardStyles.cardImage}></Grid>
      <Grid item xs={8}>
        <Grid container spacing={3} className={cardStyles.cardTitleWrapper}>
          <Grid item xs={10}>
            <h2 className={cardStyles.cardTitle}>{movie?.title}</h2>
          </Grid>
          <Grid item xs={2}>
            <div className={cardStyles.cardRate}>{movie?.rate}</div>
          </Grid>
        </Grid>
        <p className={cardStyles.cardSubTitle}>
          {genreList
            .filter(({ code }) => code !== "0" && movie?.genres.includes(code))
            .map(({ title }) => title)
            .join(", ")}
        </p>
        <div style={{ display: "flex" }}>
          <div className={cardStyles.cardPink}>{movie?.year.split("-")[0]}</div>
          <div className={cardStyles.cardPink}>{movie?.runTime} min</div>
        </div>
        <p className={cardStyles.cardDescription}>{movie?.description}</p>
      </Grid>
    </Grid>
  );
};
export default CardDetails;
