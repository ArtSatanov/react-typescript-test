import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: string | null = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state: string | null, action: PayloadAction<any>) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
