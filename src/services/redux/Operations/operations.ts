import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProducts,
  setNewUser,
  getUser,
  getListOfUsers,
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

//--------------SignUp User-----------------
export const signUpUser = createAsyncThunk(
  'registerUser',
  async (userInfo: IUserForm, thunkAPI) => {
    try {
      const userData = await setNewUser(userInfo);
      console.log(userInfo);
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
      return await getUser(persistedToken);
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
      const userID = usersList.forEach((user: IResponseUser) => {
        if (
          user.email === userInfo.email &&
          user.password === userInfo.password
        ) {
          return user.id;
        } else {
          console.log('User not found');
        }
      });
      return getUser(userID);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
