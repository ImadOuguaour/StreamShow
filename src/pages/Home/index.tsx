import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import { RootState, useAppDispatch, useAppSelector } from '../../store';
import Loading from '../../components/Loading';
import MediaSlider from '../../components/MediaSlider';
import Error from '../../components/Error';
import sliderSettings from '../../helper/sliderSettings';

import { fetchPopularMovies, fetchPopularTv } from './HomeThunks';


const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { popularMovies, popularTv, loadingPopularMovies, loadingPopularTv, errorPopularMovies, errorPopularTv } = useAppSelector((state: RootState) => state.home);

  useEffect(() => {
      dispatch(fetchPopularMovies());
      dispatch(fetchPopularTv());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-1">
      {
        loadingPopularMovies ? 
        (
          <Loading />
        )
        :
        (
          errorPopularMovies ?
          (
            <Error error={errorPopularMovies}/>
          )
          :
          (
            <>
              <h2 className="text-xl font-bold mt-8 mb-6 text-white ml-12">
                <FormattedMessage id="popularMovies" />
              </h2>
              <MediaSlider medias={popularMovies} sliderSettings={sliderSettings}/>
            </>
          )
        )
      }
      {
        loadingPopularTv ?
        (
          <Loading />
        )
        :
        (
          errorPopularTv ?
          (
            <Error error={errorPopularTv} />
          )
          :
          (
            <>
              <h2 className="text-xl font-bold mt-8 mb-6 text-white ml-12">
                <FormattedMessage id="popularTv" />
              </h2>
              <MediaSlider medias={popularTv} sliderSettings={sliderSettings}/>
            </>
          )
        )
      }
    </div>
  );
};

export default Home;
