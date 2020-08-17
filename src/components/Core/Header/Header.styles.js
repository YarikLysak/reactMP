import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    maxWidth: "1400px",
    position: "absolute",
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5em 3em",
    zIndex: 1,
  },
  addButton: {
    backgroundColor: theme.lightGray,
    border: "none",
    "&:hover": {
      backgroundColor: theme.lightGray,
      border: "none",
      opacity: "0.9",
    },
  },
}));
