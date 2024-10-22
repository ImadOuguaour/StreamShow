import axios from 'axios';

import { AppThunk } from '../../store';
import {TMDB_API_URL} from '../../constants/config';

import { fetchMoviesInit, fetchMoviesFailed, fetchMoviesSuccess, fetchDetailsMovieInit, fetchDetailsMovieSuccess, fetchDetailsMovieFailed } from './MoviesSlice';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = (page: number = 1): AppThunk => async (dispatch) => {
    dispatch(fetchMoviesInit());
    try {
        const response = await axios.get(`${TMDB_API_URL}/discover/movie?api_key=${API_KEY}&page=${page}`);
        dispatch(fetchMoviesSuccess(response.data));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchMoviesFailed());
    }
};

export const fetchMovie = (id: number): AppThunk => async (dispatch) => {
    dispatch(fetchDetailsMovieInit());
    try {
        const response = await axios.get(`${TMDB_API_URL}/movie/${id}?api_key=${API_KEY}`);
        dispatch(fetchDetailsMovieSuccess(response.data));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchDetailsMovieFailed());
    }
};
