import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice"
import userReducer from "./userslice"


const rootReducer = combineReducers({
    ui:uiReducer ,
    user:userReducer
    // Add other reducers here for different parts of your e-commerce app state
  });
  
  export default rootReducer;