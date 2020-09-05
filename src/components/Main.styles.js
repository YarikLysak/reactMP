import { createMuiTheme, makeStyles } from "@material-ui/core";

export const theme = createMuiTheme({
  pink: "#f65261",
  gray: "#555555",
  darkGray: "#232323",
  lightGray: "#939393",
  white: "#ffffff",

  button: {
    textTransform: "upperCase",
  },
});

export const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.lightGray,
    flex: "1 0 auto",
  },
});
