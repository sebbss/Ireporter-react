import axios from 'axios';
import { toast } from 'react-toastify';
import { signupTypes } from './types';

const signupAction = data => dispatch => axios.post('https://ireporter4-backend.herokuapp.com/register', data)
  .then(
    (resp) => {
      console.log(resp);
      dispatch({
        type: signupTypes.SIGNUP_SUCCESS,
        payload: resp.data,
      });
      toast.success('you have successfully signed in');
    },
  )
  .catch((error) => {
    console.log(error.response.data);
    dispatch({
      type: signupTypes.SIGNUP_FAILURE,
      error,
    });
    toast.error(error.response.data.message);
  });

export default signupAction;
