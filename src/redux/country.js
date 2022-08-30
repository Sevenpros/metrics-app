import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  details: {},
};

const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
const LOAD_DETAILS = 'LOAD_DETAILS';
const API_URL = 'https://api.covid19api.com/summary';

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOAD_COUNTRIES}/fulfilled`:
      return { ...state, countries: action.payload };
    case LOAD_DETAILS: {
      const details = state.countries.find((country) => (country.ID === action.id));
      return { ...state, details }; }
    default: return state;
  }
};

export const fetchCountries = createAsyncThunk(LOAD_COUNTRIES, async () => {
  const Response = await fetch(API_URL);
  const result = await Response.json();
  return result.Countries;
});

export const loadDetails = (id) => ({ type: LOAD_DETAILS, id });
export default countryReducer;
