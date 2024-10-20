import React from 'react';
import { Tv } from '../../pages/Home/HomeTypes';

const TvCard: React.FC<{tv : Tv}> = ({ tv }) => {
  return (
    <div className="tv-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative w-64">
      <img 
        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} 
        alt={tv.name} 
        className="w-62 h-auto object-cover" 
      />
      <h3 className="text-md font-semibold p-2">{tv.name}</h3>
    </div>
  );
};

export default TvCard;
