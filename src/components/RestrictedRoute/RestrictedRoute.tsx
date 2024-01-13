import { Navigate } from 'react-router-dom';
import { useAuth } from '../../services/redux/selectors/selectors';
import { IPropsPage } from '../../interfaces/interfaces';

export const RestrictedRoute = ({
  component,
  redirectTo = '/',
}: IPropsPage) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
