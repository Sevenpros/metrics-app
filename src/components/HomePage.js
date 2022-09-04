import { useSelector } from 'react-redux';
import Search from './Search';

const HomePage = () => {
  const countries = useSelector((state) => state.countryReducer.countries);

  return (
    <>
      <div className="container">
        <div className="headline">
          <h2>CORONA VIRUS STATISTICS AROUND THE WORLD</h2>
        </div>
        <Search countries={countries} />
      </div>

    </>
  );
};

export default HomePage;
