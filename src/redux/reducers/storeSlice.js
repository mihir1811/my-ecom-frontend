// someReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";

const initialState = {
  ...data.storeDetails,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    // Define reducers and action creators here
  },
});

export const {
  /* Action creators */
} = storeSlice.actions;
export default storeSlice.reducer;
