import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../redux/city';

import City from './City';
const Cities = () => {
    const cities = useSelector(state => state.cityReducer.cities);
    console.log(cities, cities.length);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (cities.length === 0) {
    //       dispatch(fetchCities());
    //     }
    //   }, []);
    return <div>
        <h1>CITIES</h1>
            {cities.map((city) => (
                <City
                    key={city.id}
                    city={city}
                />
            ))}
        </div>
    
}

export default Cities;