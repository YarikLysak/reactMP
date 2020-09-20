import actionTypes from "../actions/actionTypes";

const moviesInitState = {
  movieList: [],
  filteredMovieList: [],
  selectedMovie: null,
  movieView: false,
};

const moviesReducer = (state = moviesInitState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        movieList: [...payload],
        filteredMovieList: [...payload],
      };
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
    case actionTypes.SORT_MOVIES:
      return { ...state, movieList: [...state.movieList] };
    case actionTypes.FILTER_MOVIES:
      const result = payload
        ? [...state.movieList].filter((movie) => movie.genres.includes(payload))
        : [...state.movieList];
      return {
        ...state,
        filteredMovieList: result,
      };
    default:
      return state;
  }
};

export default moviesReducer;
