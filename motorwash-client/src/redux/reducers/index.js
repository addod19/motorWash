import { combineReducers } from 'redux';
import bookingsAPI from './bookingsAPI';
import userSlice from './userSlice';

export default combineReducers({
  bookingsAPI,
  userSlice 
});
