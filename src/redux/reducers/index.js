import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import userReducer from "./userslice";
import storeReducer from "./storeSlice";

const rootReducer = combineReducers({
  userData: userReducer,
  ui: uiReducer,
  store: storeReducer,
});

export default rootReducer;
