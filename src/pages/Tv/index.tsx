import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { fetchTv } from "./TvThunks";
import FeaturedMovie from "../../components/FeaturedMovie";
import MediaList from "../../components/MediaList";

const Tv: React.FC = () => {
    const dispatch = useAppDispatch();
    const { tv, loadingTv, errorTv } = useAppSelector((state: RootState) => state.series);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchTv(currentPage));
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4">
            {tv?.length > 0 && <FeaturedMovie movie={tv[0]} />}
            {loadingTv ? (
                <Loading />
            ) : errorTv ? (
                <Error error={errorTv} />
            ) : (
                <MediaList medias={tv} currentPage={currentPage} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />
            )}
        </div>
    );
};

export default Tv;
