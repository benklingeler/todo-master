import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Application from './components/Application';
import { store } from './redux/store';

// Import i18next
import './utils/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
