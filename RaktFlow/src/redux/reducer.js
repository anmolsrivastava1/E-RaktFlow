import {createSlice} from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'globalState',
  initialState: {
    uuid: false,
  },
  reducers: {
    setUuid: (state, action) => {
      state.uuid = action.payload;
    },
  },
});

export const {setUuid} = stateSlice.actions;

export default stateSlice.reducer;
