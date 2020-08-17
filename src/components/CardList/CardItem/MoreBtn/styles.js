import { makeStyles } from "@material-ui/styles";

export const styles = makeStyles((theme) => ({
  moreBg: {
    position: "absolute",
    right: 0,
    margin: theme.spacing(1.5),
    backgroundColor: "232323",
  },
  moreBtn: { color: "fff" },
  moreCloseBtn: {
    alignSelf: "flex-end",
    cursor: "pointer",
  },
}));
