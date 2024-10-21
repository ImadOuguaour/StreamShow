import axios from 'axios';

import { AppThunk } from '../../store';

import { fetchSearchInit, fetchSearchSuccess, fetchSearchFailed } from './SearchSlice';

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchSearch = (searchValue: string, page: number = 1): AppThunk => async (dispatch) => {
    dispatch(fetchSearchInit());
    try {
        const response = await axios.get(`${API_URL}search/multi?api_key=${API_KEY}&query=${searchValue}&language=en-US&page=${page}`);
        dispatch(fetchSearchSuccess(response.data));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchSearchFailed());
    }
};
