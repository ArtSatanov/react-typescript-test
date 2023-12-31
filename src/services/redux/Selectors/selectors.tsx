import { useSelector } from 'react-redux';
import { RootState } from '../store';

// ---------------Auth-----------------------

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAdmin = useSelector(selectIsAdmin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isAdmin,
  };
};

// ---------------Items-----------------------

export const selectItems = (state: RootState) => state.items.items;
export const selectIsLoading = (state: RootState) => state.items.isLoading;
export const selectError = (state: RootState) => state.items.error;
