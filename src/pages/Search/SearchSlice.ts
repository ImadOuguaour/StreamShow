import { createSlice } from '@reduxjs/toolkit';

import { SearchState } from './SearchTypes';

const initialState: SearchState = {
  resultSearch: [],
  loading: false,
  error: null,
  totalResults: 0,
};

const SearchSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    fetchSearchFailed: (state) =>{
        state.loading = false;
        state.error = 'Movies or Séries data not available';
    },
    fetchSearchSuccess: (state, action) => {
        state.loading = false;
        state.resultSearch= action.payload.results;
        state.totalResults = action.payload.total_results;
    },
    fetchSearchInit: (state) =>{
        state.loading= true;
        state.error = null;
    },
    clearSearch: (state) =>{
      state.loading= false;
      state.error = null;
      state.resultSearch = [];
      state.totalResults = 0;
    }
  },
});

export default SearchSlice.reducer;
export const {fetchSearchFailed, fetchSearchSuccess, fetchSearchInit, clearSearch} = SearchSlice.actions;