import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Logo from "../Logo";
import { headerStyles } from "./Header.styles";
import { CardManageModal } from "../../CardManageModals";

const Header = () => {
  const { header, addButton } = headerStyles();

  return (
    <div className={header}>
      <Logo />
      <CardManageModal>
        {
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AddIcon />}
            className={addButton}
          >
            Add movie
          </Button>
        }
      </CardManageModal>
    </div>
  );
};

export default Header;
