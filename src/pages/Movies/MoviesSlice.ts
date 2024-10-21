import { createSlice } from '@reduxjs/toolkit';

import { MoviesState } from './MoviesTypes';

const initialState: MoviesState = {
  movies: [],
  loadingMovies: false,
  errorMovies: null,
};

const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesFailed: (state) =>{
        state.loadingMovies = false;
        state.errorMovies = 'Movies data not available';
    },
    fetchMoviesSuccess: (state, action) =>{
        state.loadingMovies = false;
        state.movies= action.payload;
    },
    fetchMoviesInit: (state) =>{
        state.loadingMovies= true;
        state.errorMovies = null;
    }
  },
});

export default MoviesSlice.reducer;
export const {fetchMoviesFailed, fetchMoviesSuccess, fetchMoviesInit} = MoviesSlice.actions;