import { createSlice } from '@reduxjs/toolkit';
import { IFilter } from 'interfaces/interfaces';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state: IFilter, action: PayloadAction<any>) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
