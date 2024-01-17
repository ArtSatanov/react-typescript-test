import { routes } from '../../const/routes';
import { NavBar, NavButton, NavLinkSt } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavBar>
          <NavButton>
            <NavLinkSt to="/" end data-name="Home">
              Home
            </NavLinkSt>
          </NavButton>
          <NavButton>
            <NavLinkSt to={routes.LOGIN}>Login</NavLinkSt>
          </NavButton>
          <NavButton>
            <NavLinkSt to={routes.SIGNUP}>Sign Up</NavLinkSt>
          </NavButton>
        </NavBar>
      </nav>
    </>
  );
};
