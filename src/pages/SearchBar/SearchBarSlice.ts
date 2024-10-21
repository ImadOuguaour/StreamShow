import { createSlice } from '@reduxjs/toolkit';

import { SearchState } from './SearchBarTypes';

const initialState: SearchState = {
  searchedMovies: [],
  searchedTv: [],
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
        state.searchedTv= action.payload;
    },
    fetchSearchMovieSuccess: (state, action) =>{
        state.loading = false;
        state.searchedMovies= action.payload;
    },
    fetchSearchInit: (state) =>{
        state.loading= true;
        state.error = null;
    },
    clearSearch: (state) =>{
      state.loading= false;
      state.error = null;
      state.searchedMovies= [];
      state.searchedTv= [];
  }
  },
});

export default SearchBarSlice.reducer;
export const {fetchSearchFailed, fetchSearchTvSuccess, fetchSearchMovieSuccess, fetchSearchInit, clearSearch} = SearchBarSlice.actions;