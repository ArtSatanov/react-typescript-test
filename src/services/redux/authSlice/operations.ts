import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../API/API';

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (signal, thunkAPI) => {
    try {
      return await getProducts(signal);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
