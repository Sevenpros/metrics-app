import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store';
import App from './App';
import { fetchCities } from './redux/city';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchCities());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
