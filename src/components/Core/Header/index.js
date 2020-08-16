import React from "react";

import Logo from "../Logo";
import { headerStyles } from "./Header.styles";
import CardManageModal from "../../CardManageModal";

const Header = () => {
  const { header } = headerStyles();

  return (
    <div className={header}>
      <Logo />
      <CardManageModal />
    </div>
  );
};

export default Header;
