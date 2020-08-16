import { makeStyles } from "@material-ui/core";

export const cardItemStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    padding: theme.spacing(2, 2, 0),

    "&:hover $moreBg": {
      backgroundColor: "red",
    },
  },
  moreBg: {
    position: "absolute",
    right: 0,
    margin: theme.spacing(1.5),
    backgroundColor: "232323",
  },
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
