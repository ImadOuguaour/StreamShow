import { FormattedMessage } from "react-intl";
import Slider from 'react-slick';
import { Movie } from "../../pages/Home/HomeTypes";
import MovieCard from "../MovieCard";
import { memo } from "react";

export const MovieSlider: React.FC<{ movies: Movie[], sliderSettings: object  }> = ({ movies, sliderSettings }) => (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
        <FormattedMessage id="popularMovies" />
      </h2>
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <div key={movie.id} className="p-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </>
);

export default memo(MovieSlider);