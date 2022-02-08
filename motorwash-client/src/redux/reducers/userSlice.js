import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isFetching: false,
  loggedIn: false,
  data: [],
  error: {},
}

const API_URL = 'http://localhost:3000/';

export const getData = createAsyncThunk(
  'redux/reducers/userSlice.js',
  async () => {
    const response = await axios.get(API_URL).catch((error) => error);
    const data = {};

    data.users = Object.values(response.data.users);

    return data;
  },
)

const API_SIGNUP_URL = 'http://localhost:3000/users';

export const signupUser = createAsyncThunk(
  'redux/reducers/userSlice.js',
  async () => {
    const response = await axios.get(API_SIGNUP_URL).catch((error) => error);
    const data = {};

    data.users = Object.values(response.data.users);

    return data;
  },
)

const API_LOGIN_URL = 'http://localhost:3000/login';

export const loginUser = createAsyncThunk(
  'redux/reducers/userSlice.js',
  async () => {
    const response = await axios.get(API_LOGIN_URL).catch((error) => error);
    const data = {};

    data.users = Object.values(response.data.users);

    return data;
  },
)

const API_SIGNOUT_URL = 'http://localhost:3000/logout';

export const logoutUser = createAsyncThunk(
  'redux/reducers/userSlice.js',
  async () => {
    const response = await axios.get(API_SIGNOUT_URL).catch((error) => error);
    const data = {};

    data.users = Object.values(response.data.users);

    return data;
  },
)

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state, action) => ({
      ...state,
      loggedIn: true,
      users: action.payload
    }),
    signupUser: (state, action) => ({
      ...state,
      loggedIn: true,
      user: action.payload
    }),
    loginUser: (state, action) => ({
      ...state,
      loggedIn: true,
      user: action.payload
    }),
    logoutUser: (state, action) => ({
      loggedIn: false,
      user: {}
    })
  },
  extraReducers: {
    [getData.pending.type]: (state) => ({ ...state, isFetching: true }),
    [getData.fulfilled.type]: (state, action) => ({
      ...state,
      isFetching: false,
      data: action.payload,
      error: {},
    }),
    [getData.rejected.type]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
  }
})

// Action creators are generated for each case reducer function
export const { getUsers } = UserSlice.actions;

export default UserSlice.reducer;

