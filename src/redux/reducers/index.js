import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import userReducer from "./userslice";
import storeReducer from "./storeSlice";
import favouriteProductsReducer from "./favouriteproductsSlice.js"

const rootReducer = combineReducers({
  userData: userReducer,
  ui: uiReducer,
  store: storeReducer,
  favourites: favouriteProductsReducer,
});

export default rootReducer;
