import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../interfaces/interfaces';

interface initState {
   user: User[],
   token: null | string;
   isLoggedIn: boolean;
   isRefreshing: boolean;
}

const initialState: initState = {
   user: [
      { id:0 , login: "admin", password: "admin" }
   ], 
   token: null,
   isLoggedIn: false,
   isRefreshing: false,
};

initialState: const authSlice = createSlice({
  name: 'auth',
  initialState,
},
   extraReducers: {}
);
