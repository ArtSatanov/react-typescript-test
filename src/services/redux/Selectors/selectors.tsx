import { RootState } from '../store';

export const selectisLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectisAdmin = (state: RootState) => state.auth.isAdmin;

