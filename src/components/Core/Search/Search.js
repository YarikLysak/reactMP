import React from "react";
import { TextField, Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // search: {
  //   display: "flex",
  //   alignContent: "center",
  // },
});

export default () => {
  const { search } = useStyles();

  return (
    <form noValidate autoComplete="off">
      <h2>Find Your Movie</h2>
      <Grid container spacing={1}>
        <Grid item xs={10} className={search}>
          <TextField
            id="search"
            placeholder="What do you want to watch?"
            variant="outlined"
            fullWidth="true"
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" fullWidth="true">
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
