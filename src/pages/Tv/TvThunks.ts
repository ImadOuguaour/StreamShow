import axios from 'axios';

import { AppThunk } from '../../store';
import {TMDB_API_URL} from '../../constants/config';

import { fetchTvInit, fetchTvFailed, fetchTvSuccess, fetchDetailsTvInit, fetchDetailsTvSuccess, fetchDetailsTvFailed } from './TvSlice';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTv = (page: number = 1): AppThunk => async (dispatch) => {
    dispatch(fetchTvInit());
    try {
        const response = await axios.get(`${TMDB_API_URL}/discover/tv?api_key=${API_KEY}&page=${page}`);
        dispatch(fetchTvSuccess(response.data));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchTvFailed());
    }
};

export const fetchDetailsTv = (id: number): AppThunk => async (dispatch) => {
    dispatch(fetchDetailsTvInit());
    try {
        const response = await axios.get(`${TMDB_API_URL}/tv/${id}?api_key=${API_KEY}`);
        dispatch(fetchDetailsTvSuccess(response.data));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchDetailsTvFailed());
    }
};
