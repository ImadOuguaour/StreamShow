import Slider from 'react-slick';
import MediaCard from "../MediaCard";
import { memo } from "react";
import { Movie } from '../../pages/Movies/MoviesTypes';
import { Tv } from '../../pages/Tv/TvTypes';

export const MediaSlider: React.FC<{ medias: Movie[] | Tv[], sliderSettings: object  }> = ({ medias, sliderSettings }) => (
    <>
      <Slider {...sliderSettings}>
        {medias.map((media) => (
          <div key={media.id} className="p-2">
            <MediaCard media={media} />
          </div>
        ))}
      </Slider>
    </>
);

export default memo(MediaSlider);