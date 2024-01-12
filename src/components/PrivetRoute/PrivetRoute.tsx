import { Navigate } from 'react-router-dom';
import { useAuth } from '../../services/redux/Selectors/selectors';
import { IPropsPage } from '../../interfaces/interfaces';

export const PrivateRoute = ({ component, redirectTo = '/' }: IPropsPage) => {
  const { isLoggedIn, isRefreshing, isAdmin } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
