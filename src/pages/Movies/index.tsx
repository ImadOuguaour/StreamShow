import React from "react";
import { useEffect, useState } from "react";

import FeaturedMedia from "../../components/FeaturedMedia";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import DisplayMedia from "../../components/DisplayMedia";

import { fetchMovies } from "./MoviesThunks";

const Movies: React.FC = () => {
    const dispatch = useAppDispatch();
    const { movies, loadingMovies, errorMovies, totalPages } = useAppSelector((state: RootState) => state.movies);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(currentPage));
    }, [dispatch, currentPage]);


    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-hidden">
        {movies?.length > 0 && <FeaturedMedia media={movies[0]} />}
        <DisplayMedia
          currentPage={currentPage}
          error={errorMovies}
          loading={loadingMovies}
          medias={movies}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
          totalPages={totalPages}
        />
      </div>
    );
      
};

export default Movies;
