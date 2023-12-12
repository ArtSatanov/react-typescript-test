import { PayloadAction } from '@reduxjs/toolkit';
import { IInitState, IResponseUser } from '../../../interfaces/interfaces';

//--------------SignUp User-----------------
export const handleSignUpFulfilled = (
  state: IInitState,
  action: PayloadAction<IResponseUser>
) => {
  const { email, password, id } = action.payload;
  state.user = { email: email, password: password };
  state.fakeToken = id;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
//--------------LogIn User-----------------

export const handleLogInFulfilled = (
  state: IInitState,
  action: PayloadAction<IResponseUser>
) => {
  const { email, password, id } = action.payload;
  if (email === 'admin') {
    state.isAdmin = true;
  }
  state.user = { email: email, password: password };
  state.fakeToken = id;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
