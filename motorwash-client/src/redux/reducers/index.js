import { combineReducers } from 'redux';
import bookingsAPI from './bookingsAPI';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  bookingsAPI,
  userSlice 
});

export default rootReducer;