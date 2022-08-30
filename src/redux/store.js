import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countryReducer from './country';

const store = configureStore({
  reducer: {
    countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
