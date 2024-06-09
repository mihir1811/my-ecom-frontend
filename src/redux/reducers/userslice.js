// someReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";

const initialState = {
  ...data.userProfileData,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Define reducers and action creators here
  },
});

export const {
  /* Action creators */
} = userSlice.actions;
export default userSlice.reducer;
