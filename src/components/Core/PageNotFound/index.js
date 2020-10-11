import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { NoPage } from "../../../assets/images";

const PageNotFound = () => {
  const useStyles = makeStyles((theme) => ({
    pageBg: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 2em",
      backgroundColor: theme.darkGray,
      "& h1": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: " translate(-50%,-500%)",
        color: theme.white,
        fontSize: "2em",
        fontWeight: "lighter ",
        textTransform: "capitalize",
      },
      "& img": {
        height: "60%",
      },
    },
  }));

  const { pageBg } = useStyles();

  return (
    <>
      <div className={pageBg}>
        <h1>page not found</h1>
        <img src={NoPage} alt="404" />
        <Button variant="outlined" color="secondary" component={Link} to="/">
          go back to home
        </Button>
      </div>
    </>
  );
};

export default PageNotFound;
