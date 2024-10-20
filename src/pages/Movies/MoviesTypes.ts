import { Movie, Tv } from "../Home/HomeTypes";

interface MoviesState {
    movies: Movie[];
    loadingMovies: boolean;
    errorMovies: string | null;
}

interface MovieListProps {
    movies: Movie[];
    currentPage: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
    getTitle: (item: Movie | Tv) => string,
}

export type {MoviesState, MovieListProps};