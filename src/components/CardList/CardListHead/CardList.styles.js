import { makeStyles } from "@material-ui/core";

export const cardListStyles = makeStyles((theme) => ({
  filterWrapper: {
    borderBottom: "3px solid grey",
    "& button": {
      color: theme.white,
    },
    textTransform: "uppercase",
  },

  filterBlock: {
    display: "flex",
    justifyContent: "space-between",
  },

  filterGenres: {
    display: "flex",
    justifyContent: "space-between",
  },

  filterInfo: {
    margin: "1em 0",
    color: theme.white,
  },
}));
