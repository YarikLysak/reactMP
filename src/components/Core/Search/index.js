import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./styles";
import { fetchSearchMovies } from "../../../store/actions/actionCreators";

const Search = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(fetchSearchMovies(searchTerm ? searchTerm : null));
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      onSearch();
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
          onChange={handleChange}
          onKeyDown={keyPress}
        />
        <Button
          className={classes.searchBtn}
          color="secondary"
          variant="contained"
          type="button"
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
