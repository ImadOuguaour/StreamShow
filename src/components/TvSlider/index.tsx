import Slider from "react-slick";
import { Tv } from "../../pages/Home/HomeTypes";
import TvCard from "../TvCard";
import { FormattedMessage } from "react-intl";
import { memo } from "react";

export const TvSlider: React.FC<{ tvShows: Tv[], sliderSettings: object }> = ({ tvShows, sliderSettings }) => (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
        <FormattedMessage id="popularTv" />
      </h2>
      <Slider {...sliderSettings}>
        {tvShows.map((tv) => (
          <div key={tv.id} className="p-2">
            <TvCard tv={tv} />
          </div>
        ))}
      </Slider>
    </>
  );

export default memo(TvSlider);