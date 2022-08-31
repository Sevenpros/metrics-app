import { useSelector } from 'react-redux';
import { useState } from 'react';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducer.countries);
  const [search, setSearch] = useState('');
  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="input">
        <input
          type="text"
          className="search"
          placeholder="Enter country name"
          value={search}
          onChange={onChangeHandle}
        />
      </div>
      <div className="grid-container">
        {/* eslint-disable-next-line */}
 { countries.filter((country) => {
   if (search === '') {
     return country;
   } if (country.Country.toLowerCase().includes(search.toLowerCase())) {
     return country;
   }
 }).map((country) => (
   <Country
     key={country.ID}
     country={country}
   />
 ))}
      </div>
    </div>
  );
};

export default Countries;
