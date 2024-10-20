import React from 'react';
import { Tv } from '../../pages/Home/HomeTypes';

const TvCard: React.FC<{tv : Tv}> = ({ tv }) => {
  return (
    <div className="tv-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img 
        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} 
        alt={tv.name} 
        className="w-full h-auto" 
      />
      <h3 className="text-lg font-semibold p-2">{tv.name}</h3>
    </div>
  );
};

export default TvCard;
