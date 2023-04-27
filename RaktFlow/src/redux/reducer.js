import {createSlice} from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'globalState',
  initialState: {
    isUserLoggedIn: false,
    uuid: null,
    accessToken: null,
    refreshToken: null,
    firstName: 'Anmol',
    lastName: null,
    email: null,
  },
  reducers: {
    toggleUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setUuid: (state, action) => {
      state.uuid = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.email;
    },
  },
});

export const {
  toggleUserLoggedIn,
  setUuid,
  setAccessToken,
  setRefreshToken,
  setFirstName,
  setLastName,
  setEmail,
} = stateSlice.actions;

export default stateSlice.reducer;
