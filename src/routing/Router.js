import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import Details from '../components/details';
import NarBar from '../components/NavBar';

const Router = () => (
  <>
    <NarBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>

);

export default Router;
