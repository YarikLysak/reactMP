import { makeStyles } from "@material-ui/core";
import { MoviesBg } from "../../../assets/images";

export const useStyles = makeStyles((theme) => ({
  headingWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",

    width: "100%",
    maxWidth: "1400px",
    padding: "0 7em",
    backgroundColor: theme.darkGray,
  },
  headingBg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundImage: `url(${MoviesBg})`,
    filter: "blur(2.5px)",
    zIndex: 0,
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      backgroundColor: theme.darkGray,
      opacity: 0.8,
      zIndex: 0,
    },
  },
}));
