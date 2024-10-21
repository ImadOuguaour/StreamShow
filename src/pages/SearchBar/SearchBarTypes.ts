import { MediaTypeEnum } from "../../constants/mediaType"

interface SearchResult {
    id: number,
    poster_path : string,
    overview : string,
    backdrop_path : string,
    vote_average : number,
    media_type : MediaTypeEnum,
    title : string,
    release_date : string
}
interface SearchState {
    searchedMovies: SearchResult[],
    searchedTv: SearchResult[],
    loading: boolean,
    error: null | string,
}

export type {SearchState , SearchResult}
