import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import CardListSort from "./CardListSort";
import { cardListStyles } from "./CardList.styles";
import {
  filterMovies,
  seFilterBy,
} from "../../../store/actions/actionCreators";

const CardListHead = ({ count, genres }) => {
  const {
    filterWrapper,
    filterBlock,
    filterGenres,
    filterItem,
    filterInfo,
  } = cardListStyles();
  const dispatch = useDispatch();

  const handleClick = (e, filterBy) => {
    dispatch(seFilterBy(filterBy));
    dispatch(filterMovies(filterBy));
  };

  return (
    <Grid container>
      <Grid item xs={12} className={filterWrapper}>
        <Grid container className={filterBlock}>
          <Grid item xs={9} className={filterGenres}>
            <ToggleButtonGroup
              value={genres.selected}
              exclusive
              onChange={handleClick}
            >
              {genres.list.map((genre) => (
                <ToggleButton
                  key={genre.code}
                  value={genre.code}
                  className={filterItem}
                >
                  {genre.title}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={3}>
            <CardListSort />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={filterInfo}>
          <b>{count}</b> movies found
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardListHead;

CardListHead.propTypes = {
  count: PropTypes.number.isRequired,
  genres: PropTypes.object.isRequired,
};
