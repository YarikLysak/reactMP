import { makeStyles } from "@material-ui/styles";

export const styles = makeStyles((theme) => ({
  moreBg: {
    position: "absolute",
    right: 0,
    margin: theme.spacing(1.5, 3),
    backgroundColor: theme.darkGray,
    "&:hover": {
      backgroundColor: theme.pink,
    },
  },
  moreBtn: { color: theme.white },
  moreCloseBtn: {
    alignSelf: "flex-end",
    cursor: "pointer",
    marginRight: theme.spacing(1),
    "&:hover": {
      color: theme.pink,
    },
  },
}));
