import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import userReducer from "./userslice";

const rootReducer = combineReducers({
  ui: uiReducer,
  userData: userReducer,
});

export default rootReducer;
