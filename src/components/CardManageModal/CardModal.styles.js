const { makeStyles } = require("@material-ui/core");

export const cardManageStyles = makeStyles((theme) => ({
  addButton: {
    backgroundColor: theme.lightGray,
    border: "none",
    "&:hover": {
      backgroundColor: theme.lightGray,
      border: "none",
      opacity: "0.9",
    },
  },
  cardModal: {
    display: "flex",
    justifyContent: "center",
    overflow: "auto",
  },
}));
