import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: number;
};

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
  expiresIn: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState: (state, { payload }: PayloadAction<any>) => {
      const obj: AuthState = {
        accessToken: payload?.accessToken,
        refreshToken: payload?.refreshToken,
        expiresIn: payload?.expiresIn,
      };
      return obj;
    },
    setLogout: () => initialState,
  },
});

export const { updateAuthState, setLogout } = authSlice.actions;

export default authSlice.reducer;
