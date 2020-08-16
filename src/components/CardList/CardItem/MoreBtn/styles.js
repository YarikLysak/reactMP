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
  deleteModal: {
    display: "flex",
    justifyContent: "center",
    overflow: "auto",
  },
  deleteModalBody: {
    position: "absolute",
    display: "flex",
    marginTop: theme.spacing(5),
    flexDirection: "column",
    width: "60%",
    backgroundColor: theme.darkGray,
    padding: theme.spacing(2, 4, 4),
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: "initial",
  },
  deleteModalBodyIcon: {
    alignSelf: "flex-end",
    cursor: "pointer",
  },
  deleteConfirmBtn: {
    alignSelf: "flex-end",
  },
}));
