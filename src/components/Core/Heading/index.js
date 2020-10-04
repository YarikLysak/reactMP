import React from "react";
import { useSelector } from "react-redux";

import Search from "../Search";
import CardDetails from "../../CardList/CardDetails";
import { useStyles } from "./styles";

const Heading = () => {
  const { headingWrapper, headingBg } = useStyles();
  const {
    movies: { selectedMovie, movieView },
    genres,
  } = useSelector((state) => state);

  return (
    <div className={headingWrapper}>
      <div className={headingBg}></div>
      {!movieView ? (
        <Search />
      ) : (
        <CardDetails {...selectedMovie} genreList={genres.list} />
      )}
    </div>
  );
};

export default Heading;
