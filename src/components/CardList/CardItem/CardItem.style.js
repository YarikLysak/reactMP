import { makeStyles } from "@material-ui/core";

export const cardItemStyles = ({ link }) =>
  makeStyles((theme) => ({
    card: {
      position: "relative",
      height: "35em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: theme.spacing(2, 2, 0),

      "&:hover $moreBgHover": {
        visibility: "visible",
      },
    },
    imageClass: {
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `url(${link})`,
      marginBottom: theme.spacing(2),
    },
    cardTitle: { color: theme.white, marginBottom: theme.spacing(1) },
    cardDescription: { color: theme.lightGray, fontWeight: "bold" },
    yearBlock: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `1px solid ${theme.lightGray}`,
      boxShadow: `0 0 3px 0 ${theme.lightGray}`,
      borderRadius: "4px",
      color: theme.lightGray,
      fontWeight: "bold",
    },
    moreBgHover: {
      visibility: "hidden",
    },
  }))();
