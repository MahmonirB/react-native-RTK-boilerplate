import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';

export const AUTH_API_REDUCER = 'authApi';
export const authAPI = createApi({
  reducerPath: AUTH_API_REDUCER,
  baseQuery: axiosBaseQuery({ baseUrl: 'auth' }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    // TODO builder.mutation<TSendPostLoginResponse, TSendLogin>
    postLogin: builder.mutation<any, any>({
      query: data => ({
        url: '/login',
        method: 'POST',
        data,
      }),
    }),
    postRegister: builder.mutation<any, any>({
      query: data => ({
        url: '/register',
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { usePostLoginMutation, usePostRegisterMutation } = authAPI;
