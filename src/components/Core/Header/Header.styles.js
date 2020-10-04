import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    maxWidth: "1400px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5em 3em",
    zIndex: 1,
  },
  addButton: {
    boxShadow: `inset 0px 0px 30px 5px ${theme.gray}`,
    border: "none",
    "&:hover": {
      boxShadow: `inset 0px 0px 5px 0px ${theme.lightGray}`,
      border: "none",
    },
  },
  searchButton: {
    cursor: "pointer",
    transform: "rotateY(180deg)",
  },
}));
