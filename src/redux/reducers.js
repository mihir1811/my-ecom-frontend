// reducers.js
import { combineReducers } from 'redux';
import someReducer from './userReducer';

const rootReducer = combineReducers({
  userData: someReducer,
  // Add other reducers here as needed
});

export default rootReducer;