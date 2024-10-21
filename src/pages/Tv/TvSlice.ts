import { createSlice } from '@reduxjs/toolkit';

import { TvState } from './TvTypes';


const initialState: TvState = {
  tv: [],
  loadingTv: false,
  errorTv: null,
  detailsTv: null,
  errorDetailsTv: null,
  loadingDetailsTv: false
};

const TvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    fetchTvFailed: (state) =>{
        state.loadingTv = false;
        state.errorTv = 'Series data not available';
    },
    fetchTvSuccess: (state, action) =>{
        state.loadingTv = false;
        state.tv= action.payload;
    },
    fetchTvInit: (state) =>{
        state.loadingTv= true;
        state.errorTv = null;
    },
    fetchDetailsTvFailed: (state) =>{
      state.loadingDetailsTv = false;
      state.errorDetailsTv = 'Serie data not available';
    },
    fetchDetailsTvSuccess: (state, action) =>{
        state.loadingDetailsTv = false;
        state.detailsTv= action.payload;
    },
    fetchDetailsTvInit: (state) =>{
        state.loadingDetailsTv= true;
        state.errorDetailsTv = null;
    }
  },
});

export default TvSlice.reducer;
export const {fetchTvFailed, fetchTvSuccess, fetchTvInit, fetchDetailsTvFailed, fetchDetailsTvSuccess, fetchDetailsTvInit} = TvSlice.actions;