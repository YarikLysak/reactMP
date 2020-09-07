import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const StyledMenu = withStyles((theme) => ({
  paper: {
    width: "15%",
    backgroundColor: theme.darkGray,
    color: theme.white,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.pink,
    },
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.white,
      },
    },
  },
}))(MenuItem);
