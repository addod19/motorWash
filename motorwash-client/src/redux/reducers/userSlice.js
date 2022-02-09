import { SIGNUP_USER, SET_USER } from '../actions/types';

const initialState = {
  loggedIn: false,
  user: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        loggedIn: true,
        user: { ...payload.user },
      };
    case SIGNUP_USER:
      return {
        loggedIn: true,
        user: { ...payload.user },
      };
    default:
      return state;
  }
}