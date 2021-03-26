import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';

import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
