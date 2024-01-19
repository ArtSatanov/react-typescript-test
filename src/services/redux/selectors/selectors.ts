import { useSelector } from 'react-redux';
import { RootState } from '../store';

// ---------------Auth-----------------------

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectToken = (state: RootState) => state.auth.fakeToken;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAdmin = useSelector(selectIsAdmin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isAdmin,
    token,
  };
};

// ---------------Items-----------------------

export const selectItems = (state: RootState) => state.items.items;
export const selectIsLoading = (state: RootState) => state.items.isLoading;
export const selectError = (state: RootState) => state.items.error;

// -----------------NotFound-------------------------
export const selectCounter = (state: RootState) => state.notFound.counter;

// -----------------Theme------------------------
export const selectTheme = (state: RootState) => state.theme.darkMode;
