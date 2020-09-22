import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { MoreBtn } from "./MoreBtn";
import { cardItemStyles } from "./CardItem.style";
import { selectMovie } from "../../../store/actions/actionCreators";

const CardItem = ({ movie }) => {
  const { title, genres, year, photo } = movie;

  const {
    card,
    cardInfo,
    cardImage,
    cardTitle,
    cardSubTitle,
    yearBlock,
    moreBgHover,
  } = cardItemStyles({ link: photo.link });
  const dispatch = useDispatch();
  const genreList = useSelector(({ genres }) => genres.list);

  const handleClick = useCallback(() => dispatch(selectMovie(movie), [movie]));

  return (
    <div className={card}>
      <MoreBtn moreBgHoverClass={moreBgHover} movie={movie} />
      <div className={cardInfo} onClick={handleClick}>
        <div className={cardImage}></div>
        <div>
          <Grid container>
            <Grid item xs={9}>
              <h3 className={cardTitle}>{title}</h3>
            </Grid>
            <Grid item xs={3} className={yearBlock}>
              <span>{year.split("-")[0]}</span>
            </Grid>
          </Grid>
          <p className={cardSubTitle}>
            {genreList
              .filter(({ code }) => genres.includes(code))
              .map(({ title }) => title)
              .join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  movie: PropTypes.object,
};
