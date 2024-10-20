import React from 'react';
import { Movie } from '../../pages/Home/HomeTypes';

const MovieCard: React.FC<{movie : Movie}> = ({ movie }) => {
  return (
    <div className="movie-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        className="w-full h-auto" 
      />
      <h3 className="text-lg font-semibold p-2">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
