import { makeStyles } from "@material-ui/core";
import { MoviesBg } from "../../../assets/images";

export const useStyles = makeStyles((theme) => ({
  searchWrapper: {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  searchTitle: {
    margin: "1em 0",
    color: theme.white,
    fontSize: "3em",
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
