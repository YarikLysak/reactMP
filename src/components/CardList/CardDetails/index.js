import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { cardDetailsStyles } from "./styles";
import { NoPicture } from "../../../assets/images";

const CardDetails = (props) => {
  const setRateColor = (rate) => {
    if (rate > 8.5) {
      return "limegreen";
    } else if (rate > 5) {
      return "yellow";
    }
    return "#f50057";
  };

  const cardStyles = cardDetailsStyles({
    link: props.photo.link,
    rateColor: setRateColor(props.rate),
  });

  return (
    <Grid container spacing={6} className={cardStyles.cardDetail}>
      <Grid item xs={4} className={cardStyles.cardImage}></Grid>
      <Grid item xs={8}>
        <Grid container spacing={3} className={cardStyles.cardTitleWrapper}>
          <Grid item xs={10}>
            <h2 className={cardStyles.cardTitle}>{props.title}</h2>
          </Grid>
          <Grid item xs={2}>
            <div className={cardStyles.cardRate}>{props.rate}</div>
          </Grid>
        </Grid>
        <p className={cardStyles.cardSubTitle}>{props.subTitle}</p>
        <div style={{ display: "flex" }}>
          <div className={cardStyles.cardPink}>{props.year}</div>
          <div className={cardStyles.cardPink}>{props.time} min</div>
        </div>
        <p className={cardStyles.cardDescription}>{props.description}</p>
      </Grid>
    </Grid>
  );
};
export default CardDetails;

CardDetails.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  rate: PropTypes.number,
  year: PropTypes.string,
  photo: PropTypes.object,
};

CardDetails.defaultProps = {
  title: "Title not setted",
  subTitle: "Sub title not setted",
  description: "Desc not setted",
  time: "Length is undefined",
  rate: "Rate is undefined",
  year: "Year not setted",
  photo: { link: NoPicture, title: "No picture found" },
};
