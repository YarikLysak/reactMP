import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const CardListGenre = ({ genre }) => (
  <Button size="large">{genre.title}</Button>
);
export default CardListGenre;

CardListGenre.propTypes = {
  genre: PropTypes.object.isRequired,
};
