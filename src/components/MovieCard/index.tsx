import React, { useState } from 'react';
import { Movie } from '../../pages/Home/HomeTypes';
import { FaInfoCircle, FaStar } from 'react-icons/fa';
import Modal from 'react-modal';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="movie-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative w-64">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="w-62 h-auto object-cover" 
            />
            <h3 className="text-md font-semibold p-2">{movie.title}</h3>
            <div className="flex items-center justify-between p-3">
                <span className="text-yellow-500"><FaStar className="text-yellow-500 mr-1" />{movie.vote_average.toFixed(1)}</span>
                <button 
                    onClick={toggleModal} 
                    className="text-blue-500 hover:text-blue-700"
                    aria-label="More details"
                >
                    <FaInfoCircle />
                </button>
            </div>

            {/* Modal pour les détails du film */}
            <Modal
                isOpen={showModal}
                onRequestClose={toggleModal}
                contentLabel="Movie Details"
                className="modal"
                overlayClassName="overlay"
            >
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-600">{movie.overview}</p>
                <div className="mt-4">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                        className="w-48 h-auto rounded"
                    />
                </div>
                <button 
                    onClick={toggleModal} 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Close
                </button>
            </Modal>
        </div>
    );
};

Modal.setAppElement('#root');

export default MovieCard;
