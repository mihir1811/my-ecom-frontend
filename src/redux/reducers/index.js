import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import userReducer from "./userslice";
import storeReducer from "./storeSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  userData: userReducer,
  store:storeReducer
});

export default rootReducer;
