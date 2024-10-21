import { SearchResult } from "../Search/SearchTypes";
import { Tv } from "../Tv/TvTypes";

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genres: GenreMedia[];
    runtime: number;
}

interface GenreMedia {
    name: string
}
interface MoviesState {
    movies: Movie[];
    loadingMovies: boolean;
    errorMovies: string | null;
    movie: null | Movie;
    loadingDetailsMovie: boolean;
    errorDetailMovie: string | null;
}

interface MediaListProps {
    medias: Movie[] | Tv[] | SearchResult[];
    currentPage: number;
    onNextPage: () => void;
    onPreviousPage: () => void; 
}

interface MediaCardProps {
    media: Movie | Tv | SearchResult;
}

export type {Movie, MoviesState, MediaListProps, MediaCardProps, GenreMedia};