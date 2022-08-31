import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes, { string, number } from 'prop-types';
import { loadDetails } from '../redux/country';

const Country = (props) => {
  const { country } = props;
  const { Country, TotalConfirmed, ID } = country;
  const dispatch = useDispatch();
  const onClickHandle = () => {
    dispatch(loadDetails(ID));
  };
  return (
    <Link to="/details" onClick={onClickHandle} className="grid-item">
      <h2>
        {Country}
        {' '}
      </h2>
      <h3>
        {TotalConfirmed}
        {' '}
      </h3>
    </Link>
  );
};
Country.propTypes = {
  country: PropTypes.shape({ Country: string, TotalConfirmed: number, ID: string }).isRequired,
};
export default Country;
