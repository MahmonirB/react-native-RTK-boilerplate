import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type toastState = {
  open: boolean;
  severity: 'error' | 'warning' | 'info' | 'success';
  messages: string;
  autoHideDuration?: number;
};

const toastSlice = createSlice({
  name: 'toast',
  initialState: { severity: 'success', autoHideDuration: 5000 } as toastState,
  reducers: {
    openToast: (
      state,
      {
        payload: { severity, messages, autoHideDuration },
      }: PayloadAction<{
        severity: 'error' | 'warning' | 'info' | 'success';
        messages: string;
        autoHideDuration?: number;
      }>,
    ) => {
      state.severity = severity;
      state.messages = messages;
      state.open = true;
      if (autoHideDuration) {
        state.autoHideDuration = autoHideDuration;
      }
    },
    closeToast: state => {
      state.open = false;
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
