import { Button, ButtonGroup } from '@mui/material';
import { routes } from '../../const/routes';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ButtonGroup
          variant="text"
          size="large"
          aria-label="large button group"
        >
          <Button
            component={NavLink}
            to={routes.HOME}
            color="primary"
            variant="contained"
            end
          >
            HOME
          </Button>
          <Button
            component={NavLink}
            to={routes.LOGIN}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
          <Button
            component={NavLink}
            to={routes.SIGNUP}
            color="primary"
            variant="contained"
          >
            Sign Up
          </Button>
        </ButtonGroup>
      </nav>
    </>
  );
};
