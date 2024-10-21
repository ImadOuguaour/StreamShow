import React, { useState } from 'react';
import { FaBars, FaStar } from 'react-icons/fa';

import { IMAGE_API_URL } from '../../constants/config'; 
import image from '../../assets/image.png';
import { MediaCardProps } from '../../pages/Movies/MoviesTypes';
import ModalMedia from '../ModalMedia';

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const title = 'title' in media ? media.title : media.name;

    return (
        <div className="media-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative w-64 justify-center justify-self-center">
            <img 
                alt={title} 
                className="w-62 h-auto object-cover" 
                src={media.poster_path ? `${IMAGE_API_URL}/${media.poster_path}` : image}
            />
            <h3 className="text-md font-semibold p-2">{title}</h3>
            <div className="flex items-center justify-between p-3">
            <span className="text-yellow-500"><FaStar className="text-yellow-500 mr-1" />{media?.vote_average?.toFixed(1)}</span>
                <button 
                    aria-label="More details" 
                    className="text-blue-500 hover:text-blue-700"
                    onClick={toggleModal}
                >
                    <FaBars color='black'/>
                </button>
            </div>

            <ModalMedia
                isOpen={showModal} 
                media={media} 
                onClose={toggleModal} 
            />
        </div>
    );
};

export default MediaCard;
