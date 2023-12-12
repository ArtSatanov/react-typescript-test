import { createSlice } from '@reduxjs/toolkit';
import { IInitState } from '../../../interfaces/interfaces';

const initialState: IInitState = {
  user: { login: null, password: null },
  isLoggedIn: false,
  isAdmin: false,
  isRefreshing: false,
  fakeToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, { payload }) {
      if (payload.login === 'admin') {
        state.isAdmin = true;
      }
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isAdmin = false;
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
