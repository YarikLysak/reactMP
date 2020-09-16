import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { MoreBtn } from "./MoreBtn";
import { cardItemStyles } from "./CardItem.style";
import { NoPicture } from "../../../assets/images";

const CardItem = ({ movie, selectMovie }) => {
  const { title, subTitle, year, photo } = movie;

  const {
    card,
    cardImage,
    cardTitle,
    cardSubTitle,
    yearBlock,
    moreBgHover,
  } = cardItemStyles({ link: photo.link });

  const handleClick = useCallback(() => selectMovie(movie), [movie]);

  return (
    <div className={card} onClick={handleClick}>
      <MoreBtn moreBgHoverClass={moreBgHover} />
      <div className={cardImage}></div>
      <div>
        <Grid container>
          <Grid item xs={9}>
            <h3 className={cardTitle}>{title}</h3>
          </Grid>
          <Grid item xs={3} className={yearBlock}>
            <span>{year}</span>
          </Grid>
        </Grid>
        <p className={cardSubTitle}>{subTitle}</p>
      </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  movie: PropTypes.object,
  selectMovie: PropTypes.func,
};

CardItem.defaultProps = {
  movie: {
    id: "",
    title: "Title not setted",
    subTitle: "Sub title not setted",
    description: "Desc not setted",
    time: "Length is undefined",
    rate: "Rate is undefined",
    year: "Year not setted",
    photo: { link: NoPicture, title: "No picture found" },
  },
};
