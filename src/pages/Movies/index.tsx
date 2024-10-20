import { Key, useEffect, useState } from "react";
import FeaturedMovie from "../../components/FeaturedMovie";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { fetchMovies } from "./MoviesThunks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MovieCard from "../../components/MovieCard";
import { Movie } from "../Home/HomeTypes";

const Movies: React.FC = () => {
    const dispatch = useAppDispatch();
    const { movies, loadingMovies, errorMovies } = useAppSelector((state: RootState) => state.movies);
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
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4">
            {movies?.length > 0 && <FeaturedMovie movie={movies[0]} />}
            {loadingMovies ? (
                <Loading />
            ) : errorMovies ? (
                <Error error={errorMovies} />
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {movies.map((movie: Movie, key: Key | null | undefined) => (
                            <MovieCard movie={movie} key={key} />
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="text-white">Page {currentPage}</span>
                        <button
                            onClick={handleNextPage}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Movies;
