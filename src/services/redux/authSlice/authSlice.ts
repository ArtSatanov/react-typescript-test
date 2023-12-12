import { createSlice } from '@reduxjs/toolkit';
import { IInitState } from '../../../interfaces/interfaces';
import { logInUser, signUpUser } from './operations';
import { handleSignUpFulfilled, handleLogInFulfilled } from './handlers';

const initialState: IInitState = {
  user: { email: null, password: null },
  isLoggedIn: false,
  isAdmin: false,
  isRefreshing: false,
  fakeToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.isAdmin = false;
      state.fakeToken = null;
      state.isLoggedIn = false;
      state.user = { email: null, password: null };
    },
  },
  extraReducers: builder => {
    builder.addCase(signUpUser.fulfilled, handleSignUpFulfilled);
    builder.addCase(logInUser.fulfilled, handleLogInFulfilled);
  },
});

export const { logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
