import React, { useEffect, useRef } from 'react';
import { fetchPopularMovies, fetchPopularTv } from './HomeThunks';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import Loading from '../../components/Loading';
import MovieSlider from '../../components/MovieSlider';
import TvSlider from '../../components/TvSlider';
import Error from '../../components/Error';
import sliderSettings from '../../helper/sliderSettings';

const Home: React.FC = () => {
  const firstRender = useRef(true);

  const dispatch = useAppDispatch();
  const { popularMovies, popularTv, loadingPopularMovies, loadingPopularTv, errorPopularMovies, errorPopularTv } = useAppSelector((state: RootState) => state.home);
  const { movies, tv, error, loading } = useAppSelector((state: RootState) => state.search);

  useEffect(() => {
    if(firstRender.current){
      dispatch(fetchPopularMovies());
      dispatch(fetchPopularTv());
      firstRender.current = false
    }
  }, [dispatch]);

  if (popularMovies?.length === 0) {
    return <div className="text-red-500">No movies available.</div>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4">
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
            <MovieSlider movies={popularMovies} sliderSettings={sliderSettings}/>
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
            <TvSlider tvShows={popularTv} sliderSettings={sliderSettings}/>
          )
        )
      }
    </div>
  );
};

export default Home;
