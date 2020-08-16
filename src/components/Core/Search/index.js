import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useStyles } from "./Search.styles";

const Search = () => {
  const {
    searchTitle,
    searchBg,
    searchWrapper,
    searchForm,
    searchField,
    searchBtn,
  } = useStyles();

  return (
    <div className={searchWrapper}>
      <div className={searchBg}></div>
      <Typography className={searchTitle} variant="h4">
        Find Your Movie
      </Typography>
      <form noValidate autoComplete="off" className={searchForm}>
        <TextField
          id="search"
          className={searchField}
          placeholder="What do you want to watch?"
          variant="outlined"
          fullWidth
          size="small"
        />
        <Button
          className={searchBtn}
          color="secondary"
          variant="contained"
          fullWidth
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
