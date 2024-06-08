// someReducer.js
import { createSlice } from '@reduxjs/toolkit';
import {data} from '../../../data';

const initialState = {
...data.userProfileData
  // Initial state for this slice
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // Define reducers and action creators here
  },
});

export const { /* Action creators */ } = userSlice.actions;
export default userSlice.reducer;