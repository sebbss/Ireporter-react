import axios from 'axios';
import { redFlagTypes } from './types';

const redFlagAction = () => (dispatch) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  };
  return axios.get('https://ireporter4-backend.herokuapp.com/ireporter/api/v1/flags', headers)
    .then(
      (resp) => {
        console.log(resp.data.red_flags);
        dispatch({
          type: redFlagTypes.GET_SUCCESS,
          payload: resp.data.red_flags,
        });
      },
    )
    .catch((error) => {
      dispatch({
        type: redFlagTypes.GET_FAILURE,
        error,
      });
    });
};

export default redFlagAction;
