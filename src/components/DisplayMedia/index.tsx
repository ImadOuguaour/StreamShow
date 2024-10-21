import React from "react";

import { Movie } from "../../pages/Movies/MoviesTypes";
import { SearchResult } from "../../pages/Search/SearchTypes";
import { Tv } from "../../pages/Tv/TvTypes";
import Error from "../Error";
import Loading from "../Loading";
import MediaList from "../MediaList";

interface DisplayMediaProps {
  loading: boolean;
  error: null | string;
  medias: Movie[] | Tv[] | SearchResult[];
  currentPage: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const DisplayMedia: React.FC<DisplayMediaProps> = ({
  loading,
  error,
  medias,
  currentPage,
  onNextPage,
  onPreviousPage,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <MediaList
      currentPage={currentPage}
      medias={medias}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
    />
  );
};

export default DisplayMedia;
