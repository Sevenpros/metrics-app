import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Countrie from '../components/Countrie';
import Detail from '../components/Detail';
import store from '../redux/store';
import { loadDetails } from '../redux/country';

describe('Countries tests', () => {
  it('render Countries test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Countrie />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('render Details test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type LOAD_DETAILS', () => {
    const id = 1;
    const action = loadDetails(id);
    expect(action.type).toBe('LOAD_DETAILS');
  });
  it('should return an action with expected ID', () => {
    const id = 1;
    const action = loadDetails(id);
    expect(action.id).toBe(1);
  });
});
