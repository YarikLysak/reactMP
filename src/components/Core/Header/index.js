import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "../Logo";
import { headerStyles } from "./Header.styles";
import { CardManageModal } from "../../CardManageModals";

import { selectSearch } from "../../../store/actions/moviesActionCreators";
import { useMovieView } from "../../../store/selectors/moviesStateSelector";

const Header = () => {
  const { header, addButton, searchButton } = headerStyles();

  const dispatch = useDispatch();
  const onSelectSearch = () => dispatch(selectSearch());
  const movieView = useSelector(useMovieView);

  const handleClick = useCallback(() => onSelectSearch());

  return (
    <div className={header}>
      <Logo />
      {!movieView ? (
        <CardManageModal>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AddIcon />}
            className={addButton}
          >
            Add movie
          </Button>
        </CardManageModal>
      ) : (
        <Link to="/">
          <SearchIcon
            fontSize="large"
            color="secondary"
            className={searchButton}
            onClick={handleClick}
          />
        </Link>
      )}
    </div>
  );
};

export default Header;
