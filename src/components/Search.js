import { useState } from 'react';
import PropTypes from 'prop-types';
import Countries from './Countries';

const Search = (props) => {
  const { countries } = props;
  const [search, setSearch] = useState('');
  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  };
    if(!countries) {
    return <div>COUNTRIES LOADING...</div>;
  }
  esle{
  /* eslint-disable-next-line */
  const filteredCountries = countries.filter((country) => {
    if (search === '') {
      return country;
    } if (country.Country.toLowerCase().includes(search.toLowerCase())) {
      return country;
    }
  });

  return (
    <div className="countries">
      <div className="input">
        <input
          type="text"
          className="search"
          placeholder="Enter country name"
          value={search}
          onChange={onChangeHandle}
        />
      </div>
      <Countries countries={filteredCountries} />
    </div>

  );
};}

Search.propTypes = {
  countries: PropTypes.shape({}).isRequired,
};
export default Search;
