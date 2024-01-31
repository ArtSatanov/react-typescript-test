import { createSlice } from '@reduxjs/toolkit';
import { IInitStateUsers } from 'interfaces/interfaces';
import { deleteUsers, fetchUsersList } from '../operations/operations';
import {
  handleDeleteUsersFulfilled,
  handleDeleteUsersPending,
  handleDeleteUsersRejected,
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
    builder.addCase(deleteUsers.pending, handleDeleteUsersPending);
    builder.addCase(deleteUsers.fulfilled, handleDeleteUsersFulfilled);
    builder.addCase(deleteUsers.rejected, handleDeleteUsersRejected);
  },
});

export const usersReducer = usersSlice.reducer;
