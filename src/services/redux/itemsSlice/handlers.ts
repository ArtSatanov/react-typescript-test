import { PayloadAction } from '@reduxjs/toolkit';
import { IInitStateItems, IItem } from '../../../interfaces/interfaces';

export const handleItemsFulfilled = (
  state: IInitStateItems,
  action: PayloadAction<IItem[]>
) => {
  state.items = action.payload;
  state.isLoading = false;
};

export const handleItemsPending = (state: IInitStateItems) => {
  state.isLoading = true;
};

export const handleItemsRejected = (
  state: IInitStateItems,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  action.payload === 'canceled'
    ? (state.error = null)
    : (state.error = action.payload);
};
