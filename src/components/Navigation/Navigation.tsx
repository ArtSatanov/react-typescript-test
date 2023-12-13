import { routes } from '../../const/routes';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.LOGIN}>Login</NavLink>
          </li>
          <li>
            <NavLink to={routes.SIGNUP}>Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
