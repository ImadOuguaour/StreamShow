import { createSlice } from '@reduxjs/toolkit';
import { TvState } from './TvTypes';


const initialState: TvState = {
  tv: [],
  loadingTv: false,
  errorTv: null,
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
    }
  },
});

export default TvSlice.reducer;
export const {fetchTvFailed, fetchTvSuccess, fetchTvInit} = TvSlice.actions;