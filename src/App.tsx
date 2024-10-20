import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import Loading from './components/Loading';
import messages_en from './locales/en.json';

// Charger les composants en lazy loading
const Home = React.lazy(() => import('./pages/Home/index'));

const App: React.FC = () => {
  return (
    <IntlProvider locale='en' messages={messages_en}>
        <Header />
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </Router>
    </IntlProvider>
  );
};

export default App;
