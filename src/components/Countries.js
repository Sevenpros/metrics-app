import { useSelector } from 'react-redux';

import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducer.countries);

  return (
    <div className="grid-container">
      {countries.map((country) => (
        <Country
          key={country.ID}
          country={country}
        />
      ))}
    </div>
  );
};

export default Countries;
