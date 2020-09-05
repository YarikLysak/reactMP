import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { MoreBtn } from "./MoreBtn";
import { cardItemStyles } from "./CardItem.style";
import { NoPicture } from "../../../assets/images";

const CardItem = ({ id, title, subTitle, year, photo, setViewState }) => {
  const {
    card,
    cardImage,
    cardTitle,
    cardSubTitle,
    yearBlock,
    moreBgHover,
  } = cardItemStyles({ link: photo.link });

  const handleClick = useCallback(
    () => setViewState({ type: "movieView", payload: id }),
    [id]
  );

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
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  rate: PropTypes.number,
  year: PropTypes.string,
  photo: PropTypes.object,
  setViewState: PropTypes.func,
};

CardItem.defaultProps = {
  title: "Title not setted",
  subTitle: "Sub title not setted",
  description: "Desc not setted",
  time: "Length is undefined",
  rate: "Rate is undefined",
  year: "Year not setted",
  photo: { link: NoPicture, title: "No picture found" },
};
