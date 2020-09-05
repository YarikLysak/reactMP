import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "../Logo";
import { headerStyles } from "./Header.styles";
import { CardManageModal } from "../../CardManageModals";

const Header = ({ isSearch, setViewState }) => {
  const { header, addButton, searchButton } = headerStyles();

  const handleClick = useCallback(() => setViewState({ type: "search" }));

  return (
    <div className={header}>
      <Logo />
      {(() =>
        isSearch ? (
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
          <SearchIcon
            fontSize="large"
            color="secondary"
            className={searchButton}
            onClick={handleClick}
          />
        ))()}
    </div>
  );
};

export default Header;
