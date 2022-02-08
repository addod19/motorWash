import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';

const initialState = {
  isFetching: false,
  data: [],
  error: {},
}


export const getData = createAsyncThunk(
  'redux/reducers/userSlice.js',
  async () => {
    const response = await axios.get(API_URL).catch((error) => error);
    const data = {};

    data.users = Object.values(response.data.users);

    return data;
  },
)

const CREATE_BOOKING_URL = 'http://localhost:3000/bookings';

export const getBookings = createAsyncThunk(
  'redux/reducers/bookingsAPI.js',
  async () => {
    const response = await axios.get(CREATE_BOOKING_URL).catch((error) => error);
    const data = {};

    data.bookings = Object.values(response.data.bookings);

    return data;
  },
)

export const BookingsAPI = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    createBookings: (state, action) => ({
      ...state,
      isFetching: true,
      bookings: action.payload
    }),
    showBookings: (state, action) => ({
      ...state,
      isFetching: true,
      bookings: action.payload
    })
  }
});


export const { createBookings, showBookings } = BookingsAPI.actions;

export default BookingsAPI.reducer;