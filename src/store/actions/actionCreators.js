import axios from "axios";
import actionTypes from "./actionTypes";

const BASE_URL = " http://localhost:3000";

export const fetchMovies = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/movieList`);
  dispatch({ type: actionTypes.FETCH_MOVIES, payload: res.data });
};

export const fetchGenres = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/genres`);
  dispatch({ type: actionTypes.FETCH_GENRES, payload: res.data });
};

export const fetchSortBy = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/sortBy`);
  dispatch({ type: actionTypes.FETCH_SORT_BY_LIST, payload: res.data });
};

export const selectMovie = (selectedMovie) => ({
  type: actionTypes.SELECT_MOVIE,
  payload: selectedMovie,
});

export const selectSearch = () => ({
  type: actionTypes.SELECT_SEARCH,
});

export const selectSortedBy = (sortBy) => ({
  type: actionTypes.SELECT_SORTED_BY,
  payload: sortBy,
});

export const updateMovie = (updatedItem) => async (dispatch) => {
  const res = await axios.put(
    `${BASE_URL}/movieList/${updatedItem.id}`,
    updatedItem
  );
  dispatch({ type: actionTypes.EDIT_MOVIE, payload: res.data });
};

export const addMovie = (newMovie) => async (dispatch) => {
  const res = await axios.post(`${BASE_URL}/movieList/`, newMovie);

  dispatch({ type: actionTypes.ADD_MOVIE, payload: res.data });
};

export const deleteMovie = (deletedMovie) => async (dispatch) => {
  const res = await axios.delete(
    `${BASE_URL}/movieList/${deletedMovie.id}`,
    deletedMovie
  );

  dispatch({
    type: actionTypes.DELETE_MOVIE,
    payload: deletedMovie,
  });
};
