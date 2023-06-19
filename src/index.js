import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';

import store from "./store.js";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

