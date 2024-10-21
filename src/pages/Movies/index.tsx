import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import FeaturedMedia from "../../components/FeaturedMedia";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { clearSearch } from "../SearchBar/SearchBarSlice";
import DisplayMedia from "../../components/DisplayMedia";
import { fetchSearch } from "../SearchBar/SearchBarThunk";

import { fetchMovies } from "./MoviesThunks";

const Movies: React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const { movies, loadingMovies, errorMovies } = useAppSelector((state: RootState) => state.movies);
    const { searchedMovies,loading, error } = useAppSelector((state: RootState) => state.search);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(currentPage));
        return()=>{
            dispatch(clearSearch());
        }
    }, [dispatch, currentPage]);

    const DEBOUNCE_DELAY = 1000; // Délai de debounce en millisecondes

    useEffect(() => {
    const searchQuery = searchParams.get('search');

    const handler = setTimeout(() => {
        if (searchQuery) {
        dispatch(fetchSearch(searchQuery));
        }
    }, DEBOUNCE_DELAY);

    return () => {
        clearTimeout(handler); // Nettoie le timeout si searchParams change avant la fin du délai
    };
    }, [searchParams, dispatch]);  

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4">
          {searchedMovies?.length > 0 ? (
            <DisplayMedia
              currentPage={currentPage}
              error={error}
              loading={loading}
              medias={searchedMovies}
              onNextPage={handleNextPage}
              onPreviousPage={handlePreviousPage}
            />
          ) : (
            <>
              {movies?.length > 0 && <FeaturedMedia media={movies[0]} />}
              <DisplayMedia
                currentPage={currentPage}
                error={errorMovies}
                loading={loadingMovies}
                medias={movies}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
              />
            </>
          )}
        </div>
      );
      
};

export default Movies;
