import { authAPI } from './auth';

const apiMiddleware = [authAPI.middleware];

export default apiMiddleware;
