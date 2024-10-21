import { createSlice } from '@reduxjs/toolkit';

import { MoviesState } from './MoviesTypes';

const initialState: MoviesState = {
  movies: [],
  loadingMovies: false,
  errorMovies: null,
  movie: null,
  loadingDetailsMovie: false,
  errorDetailMovie: null
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
    },
    fetchDetailsMovieFailed: (state) =>{
      state.loadingDetailsMovie = false;
      state.errorDetailMovie = 'Movie not available';
    },
    fetchDetailsMovieSuccess: (state, action) =>{
        state.loadingDetailsMovie = false;
        state.movie= action.payload;
    },
    fetchDetailsMovieInit: (state) =>{
        state.loadingDetailsMovie= true;
        state.errorDetailMovie = null;
    }
  },
});

export default MoviesSlice.reducer;
export const {fetchMoviesFailed, fetchMoviesSuccess, fetchMoviesInit, fetchDetailsMovieFailed, fetchDetailsMovieSuccess, fetchDetailsMovieInit} = MoviesSlice.actions;