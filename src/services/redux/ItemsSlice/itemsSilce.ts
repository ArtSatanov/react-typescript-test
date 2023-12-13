import { createSlice } from '@reduxjs/toolkit';
import { IInitStateItems } from '../../../interfaces/interfaces';

const initialState: IInitStateItems = {
  items: [],
  isLoading: false,
  error: null,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, handlePending);
  },
});

export const itemsReducer = itemsSlice.reducer;
