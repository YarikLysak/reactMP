import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { MoreBtn } from "./MoreBtn";
import { cardItemStyles } from "./CardItem.style";
import { useGenresListState } from "../../../store/selectors/moviesStateSelector";

const CardItem = ({ movie }) => {
  const { id, title, genres, year, photo } = movie;

  const classes = cardItemStyles({ link: photo.link });
  const genreList = useSelector(useGenresListState);

  return (
    <div className={classes.card}>
      <MoreBtn moreBgHoverClass={classes.moreBgHover} movie={movie} />
      <Link to={`/film/${id}`} className={classes.cardInfo}>
        <div className={classes.cardImage}></div>
        <div>
          <Grid container>
            <Grid item xs={9}>
              <h3 className={classes.cardTitle}>{title}</h3>
            </Grid>
            <Grid item xs={3} className={classes.yearBlock}>
              <span>{year.split("-")[0]}</span>
            </Grid>
          </Grid>
          <p className={classes.cardSubTitle}>
            {genreList
              .filter(({ code }) => code !== "0" && genres.includes(code))
              .map(({ title }) => title)
              .join(", ")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  movie: PropTypes.object,
};
