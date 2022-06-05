import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import axiosConfig from './axiosConfig';
import { RootState } from '../redux/configuareStore';
import { openToast } from '../redux/toastSlice';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    any,
    unknown
  > =>
  async ({ url, method, data, params }, { getState, dispatch }) => {
    try {
      const basePath = axiosConfig.baseURL;
      const token = (getState() as RootState).auth?.accessToken;
      const result = await axios({
        url: `${basePath}/${baseUrl}${url}`,
        method,
        data,
        params,
        headers: {
          Authorization: `${token}`,
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      dispatch(
        openToast({
          severity: 'error',
          messages: err.response?.data?.[0]?.message,
        }),
      );
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export default axiosBaseQuery;
