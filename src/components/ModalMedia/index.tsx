import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { FaXmark } from 'react-icons/fa6';

import { useAppDispatch, useAppSelector } from '../../store';
import { fetchMovie } from '../../pages/Movies/MoviesThunks';
import { fetchDetailsTv } from '../../pages/Tv/TvThunks';
import { IMAGE_API_URL } from '../../constants/config'; 
import image from '../../assets/image.png';
import { Tv } from '../../pages/Tv/TvTypes';
import { Movie } from '../../pages/Movies/MoviesTypes';
import { SearchResult } from '../../pages/Search/SearchTypes';

interface ModalMediaProps {
    isOpen: boolean;
    onClose: () => void;
    media: Movie | Tv | SearchResult;
}

const ModalMedia: React.FC<ModalMediaProps> = ({ isOpen, onClose, media }) => {
    const dispatch = useAppDispatch();
    const { movie } = useAppSelector((state) => state.movies);
    const { detailsTv } = useAppSelector((state) => state.series);

    useEffect(() => {
        if (isOpen) {
            if ('name' in media) {
                dispatch(fetchDetailsTv(media.id));
            } else {
                dispatch(fetchMovie(media.id));
            }
        }
    }, [isOpen, dispatch, media]);

    const title = 'name' in media ? media.name : media.title;
    const details = 'name' in media ? detailsTv : movie;

    return (
        <Modal
            className="flex flex-col p-5 mx-auto bg-white rounded-lg shadow-lg max-w-md"
            contentLabel="Media Details"
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        >
            <div className="flex justify-between w-full mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                    <FaXmark color='black' />
                </button>
            </div>
            <p className="text-gray-600 mb-4">{details?.overview || media.overview}</p>
            <div className="mt-4">
                <img 
                    alt={title} 
                    className="w-48 h-auto rounded mb-4" 
                    src={media.poster_path ? `${IMAGE_API_URL}/${media.poster_path}` : image}
                />
            </div>
            {details && (
                <div className="mt-4">
                    {'release_date' in details && details.release_date && (
                        <p><strong>Release Date:</strong> {details.release_date}</p>
                    )}
                    {'first_air_date' in details && details.first_air_date && (
                        <p><strong>First Air Date:</strong> {details.first_air_date}</p>
                    )}
                    <p><strong>Genres:</strong> {details.genres?.map((genre: any) => genre.name).join(', ')}</p>
                    <p><strong>Rating:</strong> {details.vote_average}</p>
                    {'runtime' in details && (
                        <p><strong>Runtime:</strong> {details.runtime} minutes</p>
                    )}
                    {'episode_run_time' in details && Array.isArray(details.episode_run_time) && details.episode_run_time.length > 0 && (
                        <p><strong>Episode Runtime:</strong> {details.episode_run_time[0]} minutes</p>
                    )}
                </div>
            )}
        </Modal>
    );
};

Modal.setAppElement('#root');

export default ModalMedia;
