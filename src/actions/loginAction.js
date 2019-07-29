import axios from 'axios';
import { toast } from 'react-toastify';
import { loginTypes } from './types';

const loginAction = data => dispatch => axios.post('https://ireporter4-backend.herokuapp.com/login', data)
  .then(
    (resp) => {
      sessionStorage.setItem('token', resp.data.data[0].token);
      dispatch({
        type: loginTypes.LOGIN_SUCCESS,
        payload: resp.data,
      });
      toast.success('you have successfully logged in');
    },
  )
  .catch((error) => {
    dispatch({
      type: loginTypes.LOGIN_FAILURE,
      error,
    });
    toast.error(error.response.data.message);
  });


export default loginAction;
