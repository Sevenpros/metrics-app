import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
  const details = useSelector((state) => state.countryReducer.details);
  return (
    <>
      <div className="navigation">
        <Link to="/" className="arrow">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
      </div>
      <div className="headline">

        <h1>
          {details.Country}
        </h1>
      </div>
      <ul>
        <li className="c-details">
          <span>Total Cases Confirmed:</span>
          {details.TotalConfirmed}
        </li>
        <li className="c-details">
          <span>Total Deaths Confirmed:</span>
          {details.TotalDeaths}
        </li>
        <li className="c-details">
          <span>Total Recovered:</span>
          {details.TotalRecovered}
        </li>
        <li className="c-details">
          <span>New Case Confirmed:</span>
          {details.NewConfirmed}
        </li>
        <li className="c-details">
          <span>New Recovered:</span>
          {details.NewRecovered}
        </li>
        <li className="c-details">
          <span>New Deaths :</span>
          {details.NewDeaths}
        </li>
      </ul>
    </>
  );
};
export default Details;
