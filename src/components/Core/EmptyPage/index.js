import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  emptyBg: {
    minHeight: "600px",
    backgroundColor: theme.darkGray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    "& h1": {
      color: theme.white,
      textTransform: "capitalize",
      fontWeight: "lighter",
    },
  },
}));

const EmptyPage = () => {
  const { emptyBg } = useStyles();

  return (
    <div className={emptyBg}>
      <h1>no movie found</h1>
    </div>
  );
};

export default EmptyPage;
