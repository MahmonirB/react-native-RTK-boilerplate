import { authAPI } from './auth';

const apiReducers = {
  [authAPI.reducerPath]: authAPI.reducer,
};

export default apiReducers;
