import axios from "axios";
import { actionTypes, BASE_URL } from "../../assets/constants";

export const fetchAllMovies = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/movieList`);
  dispatch({ type: actionTypes.FETCH_MOVIES, payload: res.data });
};

export const fetchSearchMovies = (searchTerm) => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/movieList?q=${searchTerm}`);
  dispatch({ type: actionTypes.FETCH_MOVIES, payload: res.data });
};

export const fetchMovieById = (movieId, history = null) => async (dispatch) => {
  const res = await axios
    .get(`${BASE_URL}/movieList/${movieId}`)
    .catch((err) => {
      if (history) {
        history.push("/");
      }
    });
  if (res) {
    dispatch({ type: actionTypes.FETCH_MOVIE_BY_ID, payload: res.data });
  }
};

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

export const filterMovies = (filterBy) => ({
  type: actionTypes.FILTER_MOVIES,
  payload: filterBy,
});
