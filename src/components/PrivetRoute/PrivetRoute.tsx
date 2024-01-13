import { Navigate } from 'react-router-dom';
import { useAuth } from '../../services/redux/selectors/selectors';
import { IPropsPage } from '../../interfaces/interfaces';

export const PrivateRoute = ({ component, redirectTo = '/' }: IPropsPage) => {
  const { isLoggedIn, isRefreshing, isAdmin } = useAuth();
  const shouldRedirect = !isLoggedIn && isAdmin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
