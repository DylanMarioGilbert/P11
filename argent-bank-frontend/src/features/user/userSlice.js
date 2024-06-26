// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state) {
        console.log('loginStart action dispatched');
      state.status = 'loading';
    },
    loginSuccess(state, action) {
        console.log('loginSuccess action dispatched', action.payload);
      state.status = 'succeeded';
      state.user = action.payload;
    },
    loginFailure(state, action) {
        console.log('loginFailure action dispatched', action.payload);
      state.status = 'failed';
      state.error = action.payload;
    },
    logout(state) {
        console.log('logout action dispatched');
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;


