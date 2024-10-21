import React from 'react';
import Slider from 'react-slick';
import { memo } from "react";

import MediaCard from "../MediaCard";
import { Movie } from '../../pages/Movies/MoviesTypes';
import { Tv } from '../../pages/Tv/TvTypes';

export const MediaSlider: React.FC<{ medias: Movie[] | Tv[], sliderSettings: object  }> = ({ medias, sliderSettings }) => (
    <>
      <Slider {...sliderSettings}>
        {medias.map((media) => (
          <div key={media.id} className="flex p-2 m-auto justify-center">
            <MediaCard media={media} />
          </div>
        ))}
      </Slider>
    </>
);

export default memo(MediaSlider);