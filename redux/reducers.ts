import { combineReducers } from 'redux';
import toastSlice from './toastSlice';
import authSlice from './authSlice';
import apiReducers from '../api/apiReducers';

const rootReducer = combineReducers({
  auth: authSlice,
  toast: toastSlice,
  ...apiReducers,
});

export default rootReducer;
