import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    maxWidth: "1400px",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5em 3em",
    zIndex: 1,
  },
}));
