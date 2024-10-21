import React, { useEffect, useState } from "react";

import { RootState, useAppDispatch, useAppSelector } from "../../store";
import FeaturedMedia from "../../components/FeaturedMedia";
import { clearSearch } from "../Search/SearchSlice";
import DisplayMedia from "../../components/DisplayMedia";

import { fetchTv } from "./TvThunks";

const Tv: React.FC = () => {
    const dispatch = useAppDispatch();
    const { tv, loadingTv, errorTv } = useAppSelector((state: RootState) => state.series);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchTv(currentPage));
        return()=>{
            dispatch(clearSearch());
        }
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4">
        {tv?.length > 0 && <FeaturedMedia media={tv[0]} />}
        <DisplayMedia
          currentPage={currentPage}
          error={errorTv}
          loading={loadingTv}
          medias={tv}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
    );
};

export default Tv;
