import axios from 'axios';

import { AppThunk } from '../../store';
import { MediaTypeEnum } from '../../constants/mediaType';

import { fetchSearchInit, fetchSearchMovieSuccess, fetchSearchTvSuccess, fetchSearchFailed } from './SearchBarSlice';
import { SearchResult } from './SearchBarTypes';

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchSearch = (searchValue: string): AppThunk => async (dispatch) => {
    dispatch(fetchSearchInit());
    try {
        const response = await axios.get(`${API_URL}search/multi?api_key=${API_KEY}&query=${searchValue}&language=en-US`);
        const tv = response.data.results.filter((data : SearchResult)=> (data.media_type === MediaTypeEnum.TV));
        const movies = response.data.results.filter((data : SearchResult)=> data.media_type === MediaTypeEnum.MOVIE);
        console.log(response.data.results)
        console.log(movies)
        dispatch(fetchSearchTvSuccess(tv));
        dispatch(fetchSearchMovieSuccess(movies));
    } catch (err) {
        console.log("error when fetching movies : ", err);
        dispatch(fetchSearchFailed());
    }
};
