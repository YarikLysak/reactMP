import React from "react";

import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles";

const Search = () => {
  const {
    searchWrapper,
    searchTitle,
    searchForm,
    searchField,
    searchBtn,
  } = useStyles();

  const onSearch = () => {
    console.log("Search");
  };

  return (
    <div className={searchWrapper}>
      <h1 className={searchTitle}>Find Your Movie</h1>
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
