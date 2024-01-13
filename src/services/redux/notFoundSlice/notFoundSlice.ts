import { createSlice } from "@reduxjs/toolkit";
import { INotFoundInitSate } from "../../../interfaces/interfaces";

const initialState : INotFoundInitSate = {
   counter: 5,
};

const notFoundSlice = createSlice({
   name: 'notFound',
   initialState,
   reducers: {
      countDown(state: INotFoundInitSate): void {
         setTimeout(() => (state.counter = state.counter-1),1000)
         
      },
   },
});


export const { countDown } = notFoundSlice.actions;
export const notFoundReducer = notFoundSlice.reducer;