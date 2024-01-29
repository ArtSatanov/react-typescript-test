import { PayloadAction } from '@reduxjs/toolkit';
import { IInitState, IResponseUser } from '../../../interfaces/interfaces';

//--------------SignUp User-----------------
export const handleSignUpFulfilled = (
  state: IInitState,
  action: PayloadAction<IResponseUser>
) => {
  const { email, password, id, name, lastname } = action.payload;
  state.user = { email, password, name, lastname };
  state.fakeToken = id;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
//--------------LogIn User-----------------

export const handleLogInFulfilled = (
  state: IInitState,
  action: PayloadAction<IResponseUser>
) => {
  const { email, password, id, name, lastname } = action.payload;
  if (email === 'admin@gmail.com') {
    state.isAdmin = true;
  }
  state.user = { email, password, name, lastname };
  state.fakeToken = id;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

// --------------Refresh User-----------------

export const handleRefreshUserFulfilled = (
  state: IInitState,
  action: PayloadAction<IResponseUser>
) => {
  const { email, password, id, name, lastname } = action.payload;
  if (email === 'admin@gmail.com') {
    state.isAdmin = true;
  }
  state.user = {
    email,
    password,
    name,
    lastname,
  };
  state.fakeToken = id;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

//---------------Pending and Rejected-------------------

export const handlePendingAuth = (state: IInitState) => {
  state.isRefreshing = true;
  state.errorAuth = null;
};

export const handleRejectedAuth = (
  state: IInitState,
  action: PayloadAction<any>
) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};
