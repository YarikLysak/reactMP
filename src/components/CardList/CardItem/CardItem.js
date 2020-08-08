import React from "react";
import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

import NoPicture from "../../../assets/images/no-picture.svg";

const useStyles = makeStyles({
  card: { position: "relative" },
  moreBg: {
    position: "absolute",
    right: 0,
    backgroundColor: "232323",
  },
  moreBtn: { color: "fff" },
});

function CardItem({ title, description, year, photo }) {
  const { card, moreBg, moreBtn } = useStyles();
  return (
    <div className={card}>
      <Fab size="small" aria-label="more" className={moreBg}>
        <MoreVertIcon className={moreBtn} />
      </Fab>
      <img src={photo.link} alt={photo.title} />
      <div>{title}</div>
      <div>{description}</div>
      <div>{year}</div>
    </div>
  );
}

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
