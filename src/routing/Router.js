import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../components/HomePage';
// eslint-disable-next-line
import Details from '../components/details';

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>

);

export default Router;
