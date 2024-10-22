import { createSlice } from '@reduxjs/toolkit';

import { MoviesState } from './MoviesTypes';

const initialState: MoviesState = {
  movies: [],
  loadingMovies: false,
  errorMovies: null,
  movie: null,
  loadingDetailsMovie: false,
  errorDetailMovie: null,
  totalPages: 1
};

const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesFailed: (state) =>{
        state.loadingMovies = false;
        state.errorMovies = 'Movies data not available';
        state.totalPages = 1;
    },
    fetchMoviesSuccess: (state, action) =>{
        state.loadingMovies = false;
        state.movies= action.payload.results;
        state.totalPages = action.payload.total_pages;
    },
    fetchMoviesInit: (state) =>{
        state.loadingMovies= true;
        state.errorMovies = null;
        state.totalPages = 1;
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