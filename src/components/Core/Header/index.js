import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Logo from "../Logo";
import { headerStyles } from "./Header.styles";

const Header = () => {
  const { header, addButton } = headerStyles();

  return (
    <div className={header}>
      <Logo />
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AddIcon />}
        className={addButton}
      >
        Add movie
      </Button>
    </div>
  );
};

export default Header;
