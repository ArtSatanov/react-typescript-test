import { createSlice } from '@reduxjs/toolkit';

interface Users {
      id: number;
      login: string;
      password: string;
}

interface initState {
   users: Users[],
   token: null | string;
   isLoggedIn: boolean;
   isRefreshing: boolean;
}

const initialState: initState = { users: [{id: 0, login: 'admin', password: 'admin'}]   };

initialState: const authSlice = createSlice({
  name: 'auth',
  initialState,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
},
   extraReducers: {}
);
