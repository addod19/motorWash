import axios from 'axios';
import { AUTH_FAIL } from './types';

const defaultUrl = 'http://localhost:3000'; 

const setUser = payload => ({ type: 'SET_USER', payload });

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
    console.log(data);
    localStorage.setItem('tokens', data.data.auth_token.result);
    dispatch(setUser({ loggedIn: true, user: data.data.user }));
    return data.data;
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error,
    });
  }
};