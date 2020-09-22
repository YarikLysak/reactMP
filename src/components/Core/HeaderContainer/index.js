import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSearch } from "../../../store/actions/actionCreators";
import Header from "../Header";
import Search from "../Search";
import CardDetails from "../../CardList/CardDetails";
import { useStyles } from "./styles";

const HeaderContainer = () => {
  const { headingWrapper, headingBg } = useStyles();
  const dispatch = useDispatch();
  const onSelectSearch = () => dispatch(selectSearch());
  const {
    movies: { selectedMovie, movieView },
    genres,
  } = useSelector((state) => state);

  return (
    <div className={headingWrapper}>
      <div className={headingBg}></div>
      <Header movieView={movieView} selectSearch={onSelectSearch} />
      {!movieView ? (
        <Search />
      ) : (
        <CardDetails {...selectedMovie} genreList={genres.list} />
      )}
    </div>
  );
};

export default HeaderContainer;
