
import { createAsyncThunk } from '@reduxjs/toolkit';
import cityList from '../components/citylist';

const initialState = {
  cities: [],
};

const LOAD_CITIES = 'LOAD_CITIES';

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOAD_CITIES}/fulfilled`:
      return { ...state, cities: action.payload };
    default: return state;
  }
};

const getCityInfo = async (city) => {
  const { lat, lon } = city;
  const key = 'c63bf5c12f2f784cd947f5cc3a11296e';
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  const response = await (await fetch(api)).json();
  return response;
};
const toCelcius = (kelvin) => Math.round((kelvin - 273.15));

const transformData = (city) => {
  const { lat, lon } = city.coord;
  const { temp, feels_like } = city.main;
  const [currentWeather] = city.weather;
  const { description } = currentWeather;
  const celcius = toCelcius(temp);
  const feels = toCelcius(feels_like);
  const obj = {};
  obj.id = city.id;
  obj.temp = celcius;
  obj.feels_like = feels;
  obj.lat = lat;
  obj.lon = lon;
  obj.name = city.name;
  obj.description = description;
  return obj;
};

export const fetchCities = createAsyncThunk(LOAD_CITIES, async () => {
  const cities = [];
  cityList.filter((city) => {
    getCityInfo(city).then((res) => {
      cities.push(transformData(res));
    });
  });
  return cities;
});
export default cityReducer;
