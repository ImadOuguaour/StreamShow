import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Header from './components/Header';
import Loading from './components/Loading';
import messages_en from './locales/en.json';

// Charger les composants en lazy loading
const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const Tv = React.lazy(() => import('./pages/Tv'));
const Search = React.lazy(() => import('./pages/Search'))

const App: React.FC = () => {
  return (
    <IntlProvider locale='en' messages={messages_en}>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Movies />} path="/movies" />
            <Route element={<Tv />} path="/series" />
            <Route element={<Search/>} path='/search' />
          </Routes>
        </Suspense>
    </IntlProvider>
  );
};

export default App;
