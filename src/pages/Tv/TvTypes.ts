interface Tv {
    id: number;
    name: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}

interface TvState {
    tv: Tv[],
    loadingTv: boolean,
    errorTv: null | string,
};

export type {TvState, Tv};