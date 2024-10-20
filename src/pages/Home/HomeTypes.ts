interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

interface Tv {
  id: number;
  name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}
  
interface HomeState {
  popularMovies: Movie[];
  popularTv: Tv[];
  loadingPopularMovies: boolean;
  loadingPopularTv: boolean;
  errorPopularMovies: string | null;
  errorPopularTv: string | null;
}

export type {Movie, HomeState, Tv}