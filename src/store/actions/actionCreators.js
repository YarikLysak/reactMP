import actionTypes from "./actionTypes";

const BASE_URL = " http://localhost:3000";

export const fetchMovies = () => async (dispatch) => {
  const res = await fetch(`${BASE_URL}/movieList`).then((res) => res.json());
  dispatch({ type: actionTypes.FETCH_MOVIES, payload: res });
};

export const fetchGenres = () => async (dispatch) => {
  const res = await fetch(`${BASE_URL}/genres`).then((res) => res.json());
  dispatch({ type: actionTypes.FETCH_GENRES, payload: res });
};

export const fetchSortBy = () => async (dispatch) => {
  const res = await fetch(`${BASE_URL}/sortBy`).then((res) => res.json());
  dispatch({ type: actionTypes.FETCH_SORT_BY_LIST, payload: res });
};

export const selectMovie = (selectedMovie) => ({
  type: actionTypes.SELECT_MOVIE,
  payload: selectedMovie,
});

export const selectSearch = () => ({
  type: actionTypes.SELECT_SEARCH,
});

export const selectSortedBy = (sortBy) => {
  console.log(sortBy);
  return {
    type: actionTypes.SELECT_SORTED_BY,
    payload: sortBy,
  };
};

export const deleteMovie = (movie) => (dispatch) =>
  dispatch({
    type: actionTypes.DELETE_MOVIE,
    payload: movie,
  });
