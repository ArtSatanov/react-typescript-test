import { createSlice } from '@reduxjs/toolkit';
import { IInitStateItems } from '../../../interfaces/interfaces';
import {
  handleItemsFulfilled,
  handleItemsPending,
  handleItemsRejected,
} from './handlers';
import { fetchProducts } from '../operations/operations';

const initialState: IInitStateItems = {
  items: [],
  isLoading: false,
  error: null,
};

export const itemsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, handleItemsPending);
    builder.addCase(fetchProducts.fulfilled, handleItemsFulfilled);
    builder.addCase(fetchProducts.rejected, handleItemsRejected);
  },
});

export const itemsReducer = itemsSlice.reducer;
