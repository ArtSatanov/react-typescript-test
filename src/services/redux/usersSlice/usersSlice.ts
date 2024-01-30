import { createSlice } from '@reduxjs/toolkit';
import { IInitStateUsers } from 'interfaces/interfaces';

const initialState: IInitStateUsers = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  //   extraReducers: builder => {
  //     builder.addCase(fetchProducts.pending, handleItemsPending);
  //     builder.addCase(fetchProducts.fulfilled, handleItemsFulfilled);
  //     builder.addCase(fetchProducts.rejected, handleItemsRejected);
  //   },
});

export const usersReducer = usersSlice.reducer;
