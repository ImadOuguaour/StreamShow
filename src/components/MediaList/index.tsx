import React from 'react';
import MediaCard from '../MediaCard';
import { MediaListProps } from '../../pages/Movies/MoviesTypes';

const MediaList: React.FC<MediaListProps> = ({
    medias,
    currentPage,
    onNextPage,
    onPreviousPage,
}) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {medias.map((media) => (
                    <MediaCard media={media} key={media.id} />
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={onPreviousPage}
                    disabled={currentPage === 1}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-white">Page {currentPage}</span>
                <button
                    onClick={onNextPage}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default MediaList;
