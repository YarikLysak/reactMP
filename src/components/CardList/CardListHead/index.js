import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

import CardListGenre from "./CardListGenre";
import CardListSort from "./CardListSort";
import { cardListStyles } from "./CardList.styles";

const CardListHead = ({ count, genres, sortBy, selectSortedBy }) => {
  const {
    filterWrapper,
    filterBlock,
    filterGenres,
    filterInfo,
  } = cardListStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={filterWrapper}>
        <Grid container className={filterBlock}>
          <Grid item xs={6} className={filterGenres}>
            {genres.map((genre) => (
              <CardListGenre key={genre.code} genre={genre} />
            ))}
          </Grid>
          <Grid item xs={6}>
            <CardListSort sortBy={sortBy} selectSortedBy={selectSortedBy} />
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
  genres: PropTypes.array.isRequired,
  sortBy: PropTypes.array.isRequired,
  selectSortedBy: PropTypes.func.isRequired,
};
