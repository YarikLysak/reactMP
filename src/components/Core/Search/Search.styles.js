import { makeStyles } from "@material-ui/core";
import MoviesBg from "../../../assets/images/movies_bg.jpg";

export const useStyles = makeStyles((theme) => ({
  searchWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "350px",
    width: "100%",
    maxWidth: "1400px",
    padding: "0 7em",
    backgroundColor: theme.darkGray,
  },
  searchBg: {
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
  searchTitle: {
    margin: "1em 0",
    color: theme.white,
    fontWeight: "lighter ",
    textTransform: "uppercase",
    zIndex: 0,
  },
  searchForm: { display: "flex" },
  searchField: {
    flexBasis: "85%",
    marginRight: "1em",
    boxShadow: `0 0 3px 0 ${theme.lightGray}`,
    color: theme.white,
    "& input": {
      color: theme.white,
      "&::placeholder": {
        color: theme.white,
      },
    },
  },
  searchBtn: {
    flexBasis: "15%",
  },
}));
