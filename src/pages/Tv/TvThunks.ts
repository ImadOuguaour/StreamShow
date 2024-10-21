import axios from 'axios';

import { AppThunk } from '../../store';
import {TMDB_API_URL} from '../../constants/config';

import { fetchTvInit, fetchTvFailed, fetchTvSuccess } from './TvSlice';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTv = (page: number = 1): AppThunk => async (dispatch) => {
    dispatch(fetchTvInit());
    try {
        const response = await axios.get(`${TMDB_API_URL}/discover/tv?api_key=${API_KEY}&page=${page}`);
        dispatch(fetchTvSuccess(response.data.results));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchTvFailed());
    }
};
