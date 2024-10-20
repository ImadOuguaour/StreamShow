import { Movie } from "../Movies/MoviesTypes";
import { Tv } from "../Tv/TvTypes";

 
interface HomeState {
  popularMovies: Movie[];
  popularTv: Tv[];
  loadingPopularMovies: boolean;
  loadingPopularTv: boolean;
  errorPopularMovies: string | null;
  errorPopularTv: string | null;
}

export type {HomeState}