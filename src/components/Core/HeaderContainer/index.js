import React from "react";
import Header from "../Header";
import Search from "../Search";
import CardDetails from "../../CardList/CardDetails";
import { useStyles } from "./styles";

const HeaderContainer = ({ card, isSearch, setViewState }) => {
  const { headingWrapper, headingBg } = useStyles();

  return (
    <div className={headingWrapper}>
      <div className={headingBg}></div>
      <Header isSearch={isSearch} setViewState={setViewState} />
      {isSearch ? <Search /> : <CardDetails {...card} />}
    </div>
  );
};

export default HeaderContainer;
