import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "../Logo";
import { headerStyles } from "./Header.styles";
import { CardManageModal } from "../../CardManageModals";

const Header = ({ movieView, selectSearch, hideBtn = false }) => {
  const { header, addButton, searchButton } = headerStyles();

  const handleClick = useCallback(() => selectSearch());

  const headerButton = () =>
    !movieView ? (
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
    );

  return (
    <div className={header}>
      <Logo />
      {hideBtn ? "" : headerButton()}
    </div>
  );
};

export default Header;
