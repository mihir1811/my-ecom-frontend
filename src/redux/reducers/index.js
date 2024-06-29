import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import userReducer from "./userslice";
import storeReducer from "./storeSlice";
import favoriteReducer from "./favoriteProductsSlice";

const rootReducer = combineReducers({
  userData: userReducer,
  ui: uiReducer,
  store: storeReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
