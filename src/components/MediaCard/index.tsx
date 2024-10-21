import React, { useState } from 'react';
import { FaInfoCircle, FaStar } from 'react-icons/fa';
import Modal from 'react-modal';

import image from '../../assets/image.png';
import { MediaCardProps } from '../../pages/Movies/MoviesTypes';

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const title = 'title' in media ? media.title : media.name;

    return (
        <div className="media-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative w-64 ml-10 mr-0">
            <img 
                alt={title} 
                className="w-62 h-auto object-cover" 
                src={media.poster_path ? `https://image.tmdb.org/t/p/w500${media.poster_path}` : image}
            />
            <h3 className="text-md font-semibold p-2">{title}</h3>
            <div className="flex items-center justify-between p-3">
                <span className="text-yellow-500"><FaStar className="text-yellow-500 mr-1" />{media?.vote_average?.toFixed(1)}</span>
                <button 
                    aria-label="More details" 
                    className="text-blue-500 hover:text-blue-700"
                    onClick={toggleModal}
                >
                    <FaInfoCircle />
                </button>
            </div>

            {/* Modal pour les détails du film */}
            <Modal
                className="modal"
                contentLabel="media Details"
                isOpen={showModal}
                onRequestClose={toggleModal}
                overlayClassName="overlay"
            >
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">{media.overview}</p>
                <div className="mt-4">
                    <img 
                        alt={title} 
                        className="w-48 h-auto rounded" 
                        src={media.poster_path ? `https://image.tmdb.org/t/p/w500${media.poster_path}` : image}
                    />
                </div>
                <button 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" 
                    onClick={toggleModal}
                >
                    Close
                </button>
            </Modal>
        </div>
    );
};

Modal.setAppElement('#root');

export default MediaCard;
