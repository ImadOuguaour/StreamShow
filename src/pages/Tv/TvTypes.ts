import { GenreMedia } from "../Movies/MoviesTypes";

interface Tv {
    id: number;
    name: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    genres: GenreMedia[],
    episode_run_time: number[],
    first_air_date: string
}
interface TvState {
    tv: Tv[],
    loadingTv: boolean,
    errorTv: null | string,
    detailsTv: null | Tv,
    errorDetailsTv: null | string,
    loadingDetailsTv: boolean
};

export type {TvState, Tv};