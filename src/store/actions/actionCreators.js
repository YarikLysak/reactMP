import axios from "axios";
import { actionTypes, BASE_URL } from "../../assets/constants";

export const fetchGenres = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/genres`);
  dispatch({ type: actionTypes.FETCH_GENRES, payload: res.data });
};

export const fetchSortBy = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/sortBy`);
  dispatch({ type: actionTypes.FETCH_SORT_BY_LIST, payload: res.data });
};

export const selectSortedBy = (sortBy) => ({
  type: actionTypes.SELECT_SORTED_BY,
  payload: sortBy,
});

export const seFilterBy = (filterBy) => ({
  type: actionTypes.SET_FILTER_BY,
  payload: filterBy,
});
