import { MediaTypeEnum } from "../../constants/mediaType"

interface SearchResult {
    poster_path : string,
    overview : string,
    backdrop_path : string,
    vote_average : number,
    media_type : MediaTypeEnum,
    title : string,
    release_date : string
}
interface SearchState {
    movies: SearchResult[],
    tv: SearchResult[],
    loading: boolean,
    error: null | string,
}

export type {SearchState , SearchResult}
