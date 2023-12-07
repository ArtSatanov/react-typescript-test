import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../interfaces/interfaces';

interface initState {
  users: User[];
  isLoggedIn: boolean;
  isAdmin: boolean;
}

const initialState: initState = {
  users: [
    { id: 101, login: 'admin', password: 'admin' },
    { id: 102, login: 'user1', password: 'user1' },
    { id: 103, login: 'user2', password: 'user2' },
  ],
  isLoggedIn: false,
  isAdmin: false,
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
