import { Navigate } from 'react-router-dom';
import { selectisLoggedIn } from '../../services/redux/Selectors/selectors';
import { IPropsPage } from '../../interfaces/interfaces';


export const PrivateRoute = ({ component, redirectTo = '/' }:IPropsPage) => {
   const redirect = !selectisLoggedIn;
   return redirect ? <Navigate to={redirectTo} /> : component;
};