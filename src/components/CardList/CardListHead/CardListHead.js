import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import CardListGenre from "./CardListGenre/";
import CardListSort from "./CardListSort/";

const useStyles = makeStyles({
  filterBlock: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default ({ count }) => {
  const { filterBlock } = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={filterBlock}>
        <CardListGenre />
        <CardListSort />
      </Grid>
      <Grid item xs={12}>
        <span>{count} movies found</span>
      </Grid>
    </Grid>
  );
};
