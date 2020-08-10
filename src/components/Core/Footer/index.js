import React from "react";
import Logo from "../Logo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.gray,
    height: "4em",
  },
}));

const Footer = () => {
  const { footer } = useStyles();
  return (
    <div className={footer}>
      <Logo />
    </div>
  );
};

export default Footer;
