import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../../services/redux/selectors/selectors';
import { LogOut } from '../LogOut/LogOut';
import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import AccountMenu from 'components/Menu/Menu';

export const Layout = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="static" component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              ReactTypeScript_TEST
            </Typography>
            <Navigation />
            <AccountMenu />

            {isLoggedIn && (
              <div>
                <p>Hi, {user.name}</p>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Suspense fallback={<p>LOADING ... </p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
