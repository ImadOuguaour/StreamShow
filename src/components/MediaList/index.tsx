import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import MediaCard from '../MediaCard';
import { MediaListProps } from '../../pages/Movies/MoviesTypes';

const MediaList: React.FC<MediaListProps> = ({
    medias,
    currentPage,
    totalPages,
    onNextPage,
    onPreviousPage,
}) => {
    console.log(totalPages," et current : ",currentPage);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 m-auto justify-center ">
                {medias.map((media) => (
                    <MediaCard key={media.id} media={media} />
                ))}
            </div>
            <div className="flex justify-between m-4">
                <button
                    aria-label="Previous"
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={onPreviousPage}
                >
                    Previous
                </button>
                <span className="text-white"><FormattedMessage id='page'/> {currentPage} / {totalPages}</span>
                <button
                    aria-label="Next"
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={onNextPage}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default memo(MediaList);
