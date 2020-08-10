import { makeStyles } from "@material-ui/core";

export const cardListSortStyles = makeStyles((theme) => ({
  sortByWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: theme.lightGray,
  },
  sortBySelect: {
    marginLeft: "2em",
    color: theme.white,
  },
  icon: {
    fill: theme.pink,
  },
}));
