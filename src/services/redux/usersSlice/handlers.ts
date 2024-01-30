import { PayloadAction } from '@reduxjs/toolkit';
import { IInitStateUsers, IResponseUser } from '../../../interfaces/interfaces';

export const handleUsersFulfilled = (
  state: IInitStateUsers,
  action: PayloadAction<IResponseUser[]>
) => {
  state.users = action.payload;
  state.isLoading = false;
};

export const handleUsersPending = (state: IInitStateUsers) => {
  state.isLoading = true;
};

export const handleUsersRejected = (
  state: IInitStateUsers,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = action.payload;
};
