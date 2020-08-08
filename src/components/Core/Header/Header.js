import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Logo from "../Logo";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default () => {
  const { header } = useStyles();

  return (
    <div className={header}>
      <Logo />
      <Button variant="outlined" color="secondary" startIcon={<AddIcon />}>
        ADD MOVIE
      </Button>
    </div>
  );
};
