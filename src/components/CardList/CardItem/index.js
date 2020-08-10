import React from "react";
import PropTypes from "prop-types";
import { Fab, Typography, Grid } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { cardItemStyles } from "./CardItem.style";
import NoPicture from "../../../assets/images/no-picture.svg";

const CardItem = ({ title, description, year, photo }) => {
  const {
    card,
    moreBg,
    moreBtn,
    cardTitle,
    cardDescription,
    yearBlock,
  } = cardItemStyles();
  return (
    <div className={card}>
      <Fab size="small" aria-label="more" className={moreBg}>
        <MoreVertIcon className={moreBtn} />
      </Fab>
      <img src={photo.link} alt={photo.title} />
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
  );
};

export default CardItem;

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

CardItem.defaultProps = {
  title: "Title not setted",
  description: "Desc not setted",
  year: "Year not setted",
  photo: { link: NoPicture, title: "No picture found" },
};