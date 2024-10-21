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
    resultSearch: SearchResult[],
    loading: boolean,
    error: null | string,
    totalResults: number,   
}

export type {SearchState , SearchResult}
