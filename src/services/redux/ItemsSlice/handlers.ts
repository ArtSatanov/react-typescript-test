import { PayloadAction } from '@reduxjs/toolkit';
import { IInitStateItems, IItem } from '../../../interfaces/interfaces';

export const handleItemsFulfilled = (
  state: IInitStateItems,
  action: PayloadAction<IItem>
) => {
  state.items = action.payload;
};
