import { redFlagTypes } from '../actions/types';

const initialState = {
  payload: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case redFlagTypes.GET_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case redFlagTypes.GET_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
