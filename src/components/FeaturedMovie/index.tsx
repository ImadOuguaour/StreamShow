import { FormattedMessage } from "react-intl";
import { Movie } from "../../pages/Home/HomeTypes";
import { memo } from "react";

const FeaturedMovie: React.FC<{ movie: Movie }> = ({ movie }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">
        <FormattedMessage id="showingNow" />
      </h2>
      <div className="relative">
        <img 
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
          alt={movie.title} 
          className="w-full h-64 object-cover rounded-lg" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-xl">{movie.title}</h3>
        </div>
      </div>
    </div>
  );

  export default memo(FeaturedMovie);