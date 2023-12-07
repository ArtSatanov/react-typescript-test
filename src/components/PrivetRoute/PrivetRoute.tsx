import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
   const { isLoggedIn, isRefreshing } = useAuth();
   const redirect = !isLoggedIn && !isRefreshing;
   return redirect ? <Navigate to={redirectTo} /> : Component;
};