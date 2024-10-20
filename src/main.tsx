import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
