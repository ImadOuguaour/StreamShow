import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"

import App from './App.tsx';
import './index.css';
import './main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/StreamShow'>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
