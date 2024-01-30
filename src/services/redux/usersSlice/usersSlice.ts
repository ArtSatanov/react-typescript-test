import { createSlice } from '@reduxjs/toolkit';
import { IInitStateUsers } from 'interfaces/interfaces';
import { fetchUsersList } from '../operations/operations';
import {
  handleUsersFulfilled,
  handleUsersPending,
  handleUsersRejected,
} from './handlers';

const initialState: IInitStateUsers = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsersList.pending, handleUsersPending);
    builder.addCase(fetchUsersList.fulfilled, handleUsersFulfilled);
    builder.addCase(fetchUsersList.rejected, handleUsersRejected);
  },
});

export const usersReducer = usersSlice.reducer;
