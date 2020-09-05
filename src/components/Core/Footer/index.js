import React from "react";
import Logo from "../Logo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "4em",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: theme.gray,
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
