import { createSlice } from '@reduxjs/toolkit';
import { IInitState } from '../../../interfaces/interfaces';
import { logInUser, signUpUser, refreshUser } from '../Operations/operations';
import {
  handleSignUpFulfilled,
  handleLogInFulfilled,
  handleRefreshUserFulfilled,
  handlePendingAuth,
  handleRejectedAuth,
} from './handlers';

const initialState: IInitState = {
  user: { email: null, password: null, name: null },
  isLoggedIn: false,
  isAdmin: false,
  isRefreshing: false,
  fakeToken: null,
  errorAuth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpUser.pending, handlePendingAuth);
    builder.addCase(signUpUser.fulfilled, handleSignUpFulfilled);
    builder.addCase(signUpUser.rejected, handleRejectedAuth);
    builder.addCase(logInUser.pending, handlePendingAuth);
    builder.addCase(logInUser.fulfilled, handleLogInFulfilled);
    builder.addCase(logInUser.rejected, handleRejectedAuth);
    builder.addCase(refreshUser.pending, handlePendingAuth);
    builder.addCase(refreshUser.fulfilled, handleRefreshUserFulfilled);
    builder.addCase(refreshUser.rejected, handleRejectedAuth);
  },
});

export const authReducer = authSlice.reducer;
