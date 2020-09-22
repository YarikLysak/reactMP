import { makeStyles } from "@material-ui/core";

export const cardListSortStyles = makeStyles((theme) => ({
  sortByWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: theme.lightGray,
  },
  sortTrigger: {
    position: "relative",
    color: theme.white,
    fontWeight: "bold",
    marginLeft: "2em",
    paddingRight: "1.5em",
    cursor: "pointer",

    "&:hover": {
      color: theme.pink,
    },
  },
  sortTriggerIcon: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translate(0,-50%)",
    color: theme.pink,
  },
}));
