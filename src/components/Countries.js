import PropTypes from 'prop-types';
import Country from './Country';

const Countries = (props) => {
  const { countries } = props;
  return (
    <div className="grid-container">
      {/* eslint-disable-next-line */}
      {countries.map((country) => (
        <Country
          key={country.ID}
          country={country}
        />
      ))}
    </div>

  );
};
Countries.propTypes = {
  countries: PropTypes.shape({}).isRequired,
};
export default Countries;
