import { createMuiTheme, makeStyles } from "@material-ui/core";

export const theme = createMuiTheme({
  pink: "#f50057",
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
    width: "100%",
    height: "100%",
    maxWidth: "1400px",
  },
  contentWrapper: {
    width: "100%",
    flex: "1 0 auto",
  },
});
