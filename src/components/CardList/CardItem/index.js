import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from "@material-ui/core";

import { MoreBtn } from "./MoreBtn";
import { cardItemStyles } from "./CardItem.style";
import { NoPicture } from "../../../assets/images";

const CardItem = ({ title, description, year, photo }) => {
  const {
    card,
    imageClass,
    cardTitle,
    cardDescription,
    yearBlock,
    moreBgHover,
  } = cardItemStyles({ link: photo.link });
  return (
    <div className={card}>
      <MoreBtn moreBgHoverClass={moreBgHover} />
      <div className={imageClass}></div>
      <div>
        <Grid container>
          <Grid item xs={9}>
            <Typography className={cardTitle} variant="h6">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={3} className={yearBlock}>
            <span>{year}</span>
          </Grid>
        </Grid>
        <Typography className={cardDescription} variant="body2">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
  photo: PropTypes.object,
};

CardItem.defaultProps = {
  title: "Title not setted",
  description: "Desc not setted",
  year: "Year not setted",
  photo: { link: NoPicture, title: "No picture found" },
};
