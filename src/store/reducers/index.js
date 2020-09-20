import actionTypes from "../actions/actionTypes";
import { combineReducers } from "redux";

const moviesInitState = {
  movieList: [],
  selectedMovie: null,
  movieView: false,
};

const moviesReducer = (state = moviesInitState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MOVIES:
      return { ...state, movieList: [...payload] };
    case actionTypes.SELECT_MOVIE:
      return { ...state, selectedMovie: { ...payload }, movieView: true };
    case actionTypes.SELECT_SEARCH:
      return { ...state, selectedMovie: null, movieView: false };
    case actionTypes.EDIT_MOVIE:
      return {
        ...state,
        movieList: [...state.movieList].map((movie) => {
          return (movie = movie.id === payload.id ? payload : movie);
        }),
      };
    case actionTypes.ADD_MOVIE:
      return { ...state, movieList: [...state.movieList, payload] };
    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        movieList: state.movieList.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};

const genresReducer = (genres = [], { type, payload }) => {
  return type === actionTypes.FETCH_GENRES ? [...payload] : genres;
};

const sortByReducer = (sortBy = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SORT_BY_LIST:
      return [...payload];
    case actionTypes.SELECT_SORTED_BY:
      return sortBy.map((el) => ({
        ...el,
        selected: el.code == payload.code,
      }));
    default:
      return sortBy;
  }
};

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  sortBy: sortByReducer,
});
