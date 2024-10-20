import { createSlice } from '@reduxjs/toolkit';
import { HomeState } from '../../pages/Home/HomeTypes';

const initialState: HomeState = {
  popularMovies: [],
  popularTv:[],
  loadingPopularMovies: false,
  loadingPopularTv: false,
  errorPopularMovies: null,
  errorPopularTv: null,
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchPopularMoviesFailed: (state) =>{
        state.loadingPopularMovies = false;
        state.errorPopularMovies = 'Movies data not available';
    },
    fetchPopularMoviesSuccess: (state, action) =>{
        state.loadingPopularMovies = false;
        state.popularMovies= action.payload;
    },
    fetchPopularMoviesInit: (state) =>{
        state.loadingPopularMovies= true;
        state.errorPopularMovies = null;
    },
    fetchPopularTvFailed: (state) =>{
        state.loadingPopularTv = false;
        state.errorPopularTv = 'Series data not available';
    },
    fetchPopularTvSuccess: (state, action) =>{
        state.loadingPopularTv = false;
        state.popularTv= action.payload
    },
    fetchPopularTvInit: (state) =>{
        state.loadingPopularTv= true;
        state.errorPopularTv = null;
    },
  },
});

export default HomeSlice.reducer;
export const {fetchPopularMoviesFailed, fetchPopularMoviesSuccess, fetchPopularMoviesInit, fetchPopularTvInit, fetchPopularTvSuccess, fetchPopularTvFailed} = HomeSlice.actions;