import { makeStyles } from "@material-ui/core";

export const cardItemStyles = ({ link }) =>
  makeStyles((theme) => ({
    card: {
      position: "relative",
      height: "35em",
      padding: theme.spacing(2, 2, 0),

      "&:hover $moreBgHover": {
        visibility: "visible",
      },
    },
    cardInfo: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    cardImage: {
      height: "100%",
      maxHeight: "80%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `url(${link})`,
      marginBottom: theme.spacing(2),
    },
    cardTitle: {
      color: theme.lightGray,
      margin: 0,
      textTransform: "capitalize",
    },
    cardSubTitle: {
      color: theme.lightGray,
      fontWeight: "bolder",
      fontSize: "0.9em",
      margin: "0",
      marginTop: "0.5em",
    },
    yearBlock: {
      maxHeight: "1.6em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `1px solid ${theme.lightGray}`,
      boxShadow: `0 0 3px 0 ${theme.lightGray}`,
      borderRadius: "4px",
      color: theme.lightGray,
      padding: "3px 0",
      fontWeight: "bold",
    },
    moreBgHover: {
      visibility: "hidden",
    },
  }))();
