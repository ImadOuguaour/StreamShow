import { SearchResult } from "../Search/SearchTypes";
import { Tv } from "../Tv/TvTypes";

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}
interface MoviesState {
    movies: Movie[];
    loadingMovies: boolean;
    errorMovies: string | null;
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

export type {Movie, MoviesState, MediaListProps, MediaCardProps};