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

  const onSearch = () => {
    console.log("Search");
  };

  return (
    <div className={searchWrapper}>
      <div className={searchBg}></div>
      <Typography className={searchTitle} variant="h4">
        Find Your Movie
      </Typography>
      <form className={searchForm} autoComplete="off" noValidate>
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
          onClick={onSearch}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
