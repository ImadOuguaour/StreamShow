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
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const DisplayMedia: React.FC<DisplayMediaProps> = ({
  loading,
  error,
  medias,
  currentPage,
  totalPages,
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
      totalPages={totalPages}
    />
  );
};

export default DisplayMedia;
