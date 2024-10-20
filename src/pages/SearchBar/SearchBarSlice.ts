import { createSlice } from '@reduxjs/toolkit';
import { SearchState } from './SearchBarTypes';

const initialState: SearchState = {
  movies: [],
  tv: [],
  loading: false,
  error: null,
};

const SearchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    fetchSearchFailed: (state) =>{
        state.loading = false;
        state.error = 'Movies or Séries data not available';
    },
    fetchSearchTvSuccess: (state, action) => {
        state.loading = false;
        state.tv= action.payload;
    },
    fetchSearchMovieSuccess: (state, action) =>{
        state.loading = false;
        state.movies= action.payload;
    },
    fetchSearchInit: (state) =>{
        state.loading= true;
        state.error = null;
    }
  },
});

export default SearchBarSlice.reducer;
export const {fetchSearchFailed, fetchSearchTvSuccess, fetchSearchMovieSuccess, fetchSearchInit} = SearchBarSlice.actions;