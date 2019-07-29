import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import loginAction from '../loginAction';
import { loginTypes, signupTypes } from '../types';
import signupAction from '../signupAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tests for loginAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch create success on successfull login', () => {
    const store = mockStore({});
    const data = {
      username: 'sebbss',
      password: 'Enter123',
    };
    const mockData = {
      data: [{ user: { username:"sebbss" } }]
    };
    const expectedActions = [
      {
        type: loginTypes.LOGIN_SUCCESS,
        payload: mockData,
      },
    ];
    moxios.stubRequest('https://ireporter4-backend.herokuapp.com/login', {
      status: 200,
      response: mockData,

    });
    store.dispatch(loginAction(data)).then(() => {
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
      message: "invalid credentials",
    };

    const expectedActions = [
      {
        type: loginTypes.LOGIN_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ireporter4-backend.herokuapp.com/login', {
      status: 400,
      error: mockData,

    });
    store.dispatch(loginAction(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch create success on successfull signup', () => {
    const store = mockStore({});
    const data = {
      username: 'sebbss',
      password: 'Enter123',
    };
    const mockData = {
      data: [{ user: { username:"sebbss" } }]
    };
    const expectedActions = [
      {
        type: signupTypes.SIGNUP_SUCCESS,
        payload: mockData,
      },
    ];
    moxios.stubRequest('https://ireporter4-backend.herokuapp.com/register', {
      status: 200,
      response: mockData,

    });
    store.dispatch(signupAction(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch failure on failure to signup', () => {
    const store = mockStore({});
    const data = {
        username: 'sebbss',
        password: 'Enter123',
    };
    const mockData = {
      message: "invalid email",
    };

    const expectedActions = [
      {
        type: signupTypes.SIGNUP_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ireporter4-backend.herokuapp.com/register', {
      status: 400,
      error: mockData,

    });
    store.dispatch(signupAction(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
