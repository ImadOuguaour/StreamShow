import { useEffect, useState } from "react";
import FeaturedMovie from "../../components/FeaturedMovie";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { fetchMovies } from "./MoviesThunks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MediaList from "../../components/MediaList";

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
                <MediaList medias={movies} currentPage={currentPage} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />
            )}
        </div>
    );
};

export default Movies;
