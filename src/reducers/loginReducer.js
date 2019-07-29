import { loginTypes, signupTypes } from '../actions/types';

const initialState = {
  loggedIn: false,
  signIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case loginTypes.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
      };
    case signupTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signIn: true,
      };
    case signupTypes.SIGNUP_FAILURE:
      return {
        ...state,
        signIn: false,
      };
    default:
      return state;
  }
};
