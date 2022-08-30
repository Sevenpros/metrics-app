import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cityReducer from './city';

const store = configureStore({
  reducer: {
    cityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
