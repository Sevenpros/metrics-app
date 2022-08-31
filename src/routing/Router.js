import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import Details from '../components/Details';

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>

);

export default Router;
