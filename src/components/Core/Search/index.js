import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./styles";
import { fetchSearchMovies } from "../../../store/actions/moviesActionCreators";

const Search = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const urlSearchString = search.split("?=").join("");
    dispatch(fetchSearchMovies(urlSearchString ? urlSearchString : null));
  });

  const onSearch = () => {
    dispatch(fetchSearchMovies(searchTerm ? searchTerm : null));
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      document.querySelector('[name="search"]').click();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={classes.searchWrapper}>
      <h1 className={classes.searchTitle}>Find Your Movie</h1>
      <form className={classes.searchForm} autoComplete="off" noValidate>
        <TextField
          id="search"
          className={classes.searchField}
          placeholder="What do you want to watch?"
          variant="outlined"
          fullWidth
          size="small"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={keyPress}
        />
        <Link to={`/search${searchTerm ? "?=" + searchTerm : ""}`}>
          <Button
            className={classes.searchBtn}
            color="secondary"
            variant="contained"
            type="button"
            name="search"
            fullWidth
            onClick={onSearch}
          >
            Search
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
