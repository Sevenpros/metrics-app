import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store';
import App from './App';
import { fetchCountries } from './redux/country';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchCountries());
root.render(
  <BrowserRouter basename="/metrics-app">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
