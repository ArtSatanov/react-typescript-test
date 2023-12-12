import { createSlice } from '@reduxjs/toolkit';
import { IInitState, IResponseUser } from '../../../interfaces/interfaces';
import { registerUser } from './operations';

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
    // fill in primary logic here
  },
  extraReducers: builder => {
    builder.addCase(
      registerUser.fulfilled,
      (state: IInitState, action: IResponseUser) => {}
    );
  },
});

export const { logIn, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

// [registerUser.fulfilled](state: IInitState, action: IResponseUser) {
//   const { email, password, id } = action.payload;
//   state.user = { email: email, password: password };
//   state.fakeToken = id;
//   state.isLoggedIn = true;
// },
// logOut(state) {
//   state.isAdmin = false;
//   state.isLoggedIn = false;
// },
