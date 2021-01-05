import axios from '@/axios';
import { setAuthToken } from '@utils';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './authActionTypes';

export const RegisterWithEmail = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then((res) => history.push('/login'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const authWithEmail = (userData) => (dispatch) => {
  axios
    .post('/api/users/login', userData)
    .then((res) => {
      const { token } = res.data;
      console.log(res.data);

      localStorage.setItem('jwtToken', token);
      setAuthToken(token);

      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const AuthWithThirdParty = (userData) => {
  console.log(userData);
  dispatch(setCurrentUser(userData));
};

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setUserLoading = () => ({
  type: USER_LOADING,
});

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');

  setAuthToken(false);

  dispatch(setCurrentUser(null));
};
