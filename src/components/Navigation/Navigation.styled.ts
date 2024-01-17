import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkSt = styled(NavLink)`
  display: block;
  padding: 24px
  font-weight: 500;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  width: fit-content;
  cursor: pointer;
`;

export const NavButton = styled.li`
  display: block;
  width: 100%;
  &:hover {
    background: rgba(61, 55, 55, 0.36);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.7px);
    -webkit-backdrop-filter: blur(4.7px);
    border: 1px solid rgba(61, 55, 55, 0.29);
  }
`;

export const NavBar = styled.ul`
  display: flex;
  gap: 40px;
`;
