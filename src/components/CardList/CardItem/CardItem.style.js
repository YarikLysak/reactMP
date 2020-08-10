import { makeStyles } from "@material-ui/core";

export const cardItemStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
  },
  moreBg: {
    position: "absolute",
    right: 0,
    backgroundColor: "232323",
  },
  moreBtn: { color: "fff" },
  cardTitle: { color: theme.white },
  cardDescription: { color: theme.lightGray, fontWeight: "bold" },
  yearBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${theme.lightGray}`,
    boxShadow: `0 0 3px 0 ${theme.lightGray}`,
    borderRadius: "4px",
    color: theme.lightGray,
    fontWeight: "bold",
  },
}));
