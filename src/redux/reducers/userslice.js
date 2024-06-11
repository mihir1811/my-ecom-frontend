// someReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";

const initialState = {
  ...data.userProfileData,isLoggedIn:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Define reducers and action creators here
    logoutUser(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    updateLoginStatus(state ,action){
      console.log(action.payload)
      return {...state , isLoggedIn:action.payload}
    },
    
    
  },
});

export const {
  /* Action creators */
  updateLoginStatus ,
  logoutUser
} = userSlice.actions;
export default userSlice.reducer;
