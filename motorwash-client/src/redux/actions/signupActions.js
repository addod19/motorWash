import axios from 'axios';
import setAuthToken from '../../services/setAuthToken';
import { AUTH_FAIL } from './types';

const defaultUrl = 'http://localhost:3000'; 

const setUser = payload => ({ type: 'SET_USER', payload });

const loadCurrentUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
}

export const signupUser = userDetails => async dispatch => {
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userDetails),
  };

  try {
    const data = await axios.post(`${defaultUrl}/users`, userDetails, apiConfig);
    // console.log(data);
    localStorage.setItem('tokens', data.data.token);
    dispatch(setUser({ loggedIn: true, user: data.userSlice.user }));
    return data.userSlice;
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error,
    });
  }
};

export default loadCurrentUser;