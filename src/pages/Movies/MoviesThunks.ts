import axios from 'axios';
import { AppThunk } from '../../store';
import { fetchMoviesInit, fetchMoviesFailed, fetchMoviesSuccess } from './MoviesSlice';

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = (page: number = 1): AppThunk => async (dispatch) => {
    dispatch(fetchMoviesInit());
    try {
        const response = await axios.get(`${API_URL}discover/movie?api_key=${API_KEY}&page=${page}`);
        dispatch(fetchMoviesSuccess(response.data.results));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchMoviesFailed());
    }
};
