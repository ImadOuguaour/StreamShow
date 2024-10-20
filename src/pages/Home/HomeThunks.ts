import axios from 'axios';
import { AppThunk } from '../../store';
import { fetchPopularMoviesFailed, fetchPopularMoviesInit, fetchPopularMoviesSuccess, fetchPopularTvFailed, fetchPopularTvInit, fetchPopularTvSuccess } from './HomeSlice';

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularMovies = (): AppThunk => async (dispatch) => {
    dispatch(fetchPopularMoviesInit())
  try {
    const response = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&sort_by=popularity.desc`);
    dispatch(fetchPopularMoviesSuccess(response.data.results));
  } catch (err) {
    console.log("error when fetching movies : ",err)
    dispatch(fetchPopularMoviesFailed());
  }
};

export const fetchPopularTv = (): AppThunk => async (dispatch) => {
    dispatch(fetchPopularTvInit())
  try {
    const response = await axios.get(`${API_URL}tv/popular?api_key=${API_KEY}&sort_by=popularity.desc`);
    dispatch(fetchPopularTvSuccess(response.data.results));
  } catch (err) {
    console.log("error when fetching tv : ",err)
    dispatch(fetchPopularTvFailed());
  }
};