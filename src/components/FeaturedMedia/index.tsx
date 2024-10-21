import React from "react";
import { FormattedMessage } from "react-intl";
import { memo } from "react";

import { IMAGE_ORIGANL_API_URL } from "../../constants/config";
import { Movie } from "../../pages/Movies/MoviesTypes";
import { Tv } from "../../pages/Tv/TvTypes";

const FeaturedMedia: React.FC<{ media: Movie | Tv }> = ({ media }) => {
  const title = 'title' in media ? media.title : media.name;
  return(
    <div className="mb-8 p-8">
      <h2 className="text-xl font-bold mb-4 text-white">
        <FormattedMessage id="showingNow" />
      </h2>
      <div className="relative">
        <img 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg" 
          src={`${IMAGE_ORIGANL_API_URL}/${media.backdrop_path}`} 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-xl">{title}</h3>
        </div>
      </div>
    </div>
  )
}

  export default memo(FeaturedMedia);