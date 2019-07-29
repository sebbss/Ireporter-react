import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { redFlagTypes } from '../types';
import redFlagAction from '../redFlagActions';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tests for loginAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch success on successfull retrival', () => {
    const store = mockStore({});
    const mockData = {
      red_flags: null
    };
    const expectedActions = [
      {
        type: redFlagTypes.GET_SUCCESS,
        payload: null,
      },
    ];
    moxios.stubRequest('https://ireporter4-backend.herokuapp.com/ireporter/api/v1/flags', {
      status: 200,
      response: mockData,

    });
    store.dispatch(redFlagAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch failure on failure', () => {
    const store = mockStore({});
    const data = {
        username: 'sebbss',
        password: 'Enter123',
    };
    const mockData = {
      message: "token invalid",
    };

    const expectedActions = [
      {
        type: redFlagTypes.GET_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ireporter4-backend.herokuapp.com/ireporter/api/v1/flags', {
      status: 400,
      error: mockData,

    });
    store.dispatch(redFlagAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
