import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage';
// eslint-disable-next-line
  import Details from './details';

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>

);

export default Router;
