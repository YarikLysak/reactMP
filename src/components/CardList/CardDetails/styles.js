import { makeStyles } from "@material-ui/core";

export const cardDetailsStyles = ({ link, rateColor }) =>
  makeStyles((theme) => ({
    cardDetail: {
      height: "500px",
      padding: "100px 0 30px",
      display: "flex",
      zIndex: 1,
    },
    cardImage: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundImage: `url(${link})`,
      marginBottom: theme.spacing(2),
    },
    cardTitleWrapper: {
      display: "flex",
      marginBottom: "1em",
      position: "relative",
    },
    cardTitle: {
      color: theme.white,
      margin: 0,
      textTransform: "capitalize",
      fontSize: "3em",
    },
    cardRate: {
      padding: "15px",
      border: `2px solid ${theme.lightGray}`,
      borderRadius: "50%",
      color: rateColor,
      fontSize: "1.5em",
      textAlign: "center",
    },
    cardSubTitle: {
      color: theme.lightGray,
      fontWeight: "bolder",
      fontSize: "0.8em",
      margin: "0",
    },
    cardDescription: {
      color: theme.lightGray,
      margin: 0,
    },
    moreBgHover: {
      visibility: "hidden",
    },
    cardPink: {
      color: theme.pink,
      fontSize: "1.5em",
      margin: "1em 1em",
      marginLeft: 0,
    },
  }))();
