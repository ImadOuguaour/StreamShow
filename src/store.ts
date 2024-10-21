import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import HomeSlice from './pages/Home/HomeSlice';
import MoviesSlice from './pages/Movies/MoviesSlice';
import SearchBarSlice from './pages/Search/SearchSlice';
import TvSlice from './pages/Tv/TvSlice';

const store = configureStore({
  reducer: {
    home: HomeSlice,
    movies: MoviesSlice,
    search: SearchBarSlice,
    series: TvSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,  // Le type de retour de la fonction (par défaut, void)
  RootState,   // Le type de l'état global (défini dans store.ts)
  unknown,     // Le type des arguments extra (par défaut "unknown", car rarement utilisé)
  Action<string> // Le type des actions, ici une action typée par une chaîne de caractères
>;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
