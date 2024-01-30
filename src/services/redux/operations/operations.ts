import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProducts,
  setNewUser,
  getUser,
  getListOfUsers,
  userStatus,
  fetchUsers,
} from '../../API/API';
import { RootState } from '../store';
import { IUserForm, IResponseUser } from '../../../interfaces/interfaces';

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (signal: any, thunkAPI) => {
    try {
      return await getProducts(signal);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUsersList = createAsyncThunk(
  'fetchUsers',
  async (signal: any, thunkAPI) => {
    try {
      return await fetchUsers(signal);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//--------------SignUp User-----------------
export const signUpUser = createAsyncThunk(
  'registerUser',
  async (userInfo: IUserForm, thunkAPI) => {
    try {
      const userData = await setNewUser(userInfo);

      return userData;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// --------------Refresh User-----------------
export const refreshUser = createAsyncThunk(
  'refreshUser',
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    const persistedToken: RootState = state.auth.fakeToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const user = await getUser(persistedToken);
      console.log(user);
      return user;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//--------------LogIn User-----------------

export const logInUser = createAsyncThunk(
  'logInUser',
  async (userInfo: IUserForm, thunkAPI) => {
    try {
      const usersList = await getListOfUsers();

      const userResp = usersList.find(
        (user: IResponseUser) =>
          user.email === userInfo.email && user.password === userInfo.password
      );

      const userLoginned = await getUser(userResp.id);
      await userStatus(userResp.id, { status: true });

      return userLoginned;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ------------------LogOut --------------------

export const logOutUser = createAsyncThunk(
  'logOutUser',
  async (_, thunkAPI) => {
    try {
      const state: RootState = thunkAPI.getState();
      await userStatus(state.auth.fakeToken, { status: false });
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
