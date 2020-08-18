import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useStyles } from "./Search.styles";
import Header from "../Header";

const Search = () => {
  const {
    headingWrapper,
    searchBg,
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
    <div className={headingWrapper}>
      <div className={searchBg}></div>
      <Header />
      <div className={searchWrapper}>
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
    </div>
  );
};

export default Search;
