import React from "react";
import { connect } from "react-redux";

import { selectSearch } from "../../../store/actions/actionCreators";
import Header from "../Header";
import Search from "../Search";
import CardDetails from "../../CardList/CardDetails";
import { useStyles } from "./styles";

const HeaderContainer = ({ selectedMovie, movieView, selectSearch }) => {
  const { headingWrapper, headingBg } = useStyles();

  return (
    <div className={headingWrapper}>
      <div className={headingBg}></div>
      <Header movieView={movieView} selectSearch={selectSearch} />
      {!movieView ? <Search /> : <CardDetails {...selectedMovie} />}
    </div>
  );
};

const mapStateToProps = ({ movies: { selectedMovie, movieView } }) => {
  return { selectedMovie, movieView };
};

export default connect(mapStateToProps, { selectSearch })(HeaderContainer);
