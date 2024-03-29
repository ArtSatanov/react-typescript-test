import { createSlice } from '@reduxjs/toolkit';
import { INotFoundInitSate } from '../../../interfaces/interfaces';

const initialState: INotFoundInitSate = {
  counter: 10,
};

const notFoundSlice = createSlice({
  name: 'notFound',
  initialState,
  reducers: {
    countDown(state: INotFoundInitSate): void {
      state.counter -= 1;
      console.log('action');
    },
  },
});

export const { countDown } = notFoundSlice.actions;
export const notFoundReducer = notFoundSlice.reducer;
