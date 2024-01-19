import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { routes } from './const/routes';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NotFound from './pages/NotFound/NotFound';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './components/PrivetRoute/PrivetRoute';
import { AdminPage } from './pages/Admin/AdminPage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './services/redux/store';
import { useEffect, useMemo, useState } from 'react';
import { selectTheme, useAuth } from './services/redux/selectors/selectors';
import { refreshUser } from './services/redux/operations/operations';
import UserPage from './pages/User/UserPage';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { Box, CssBaseline, PaletteMode } from '@mui/material';
import { getDesignTokens } from 'components/MainStyles/theme/theme';

const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('mobile')]: {
    minWidth: '320px',
    maxWidth: '428px',
    padding: '0 16px',
    margin: '0 auto',
  },
  [theme.breakpoints.between('tablet', 'laptop')]: {
    maxWidth: '768px',
  },
  [theme.breakpoints.between('laptop', 'desktop')]: {
    maxWidth: '1024px',
  },
  [theme.breakpoints.up('desktop')]: {
    maxWidth: '1158px',
    padding: '0 15px',
  },
}));

function App() {
  const [mode, setMode] = useState('light');
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshing } = useAuth();
  const darkMode = useSelector(selectTheme);

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode as PaletteMode)),
    [mode]
  );

  useMemo(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        {isRefreshing ? (
          <p>Refreshing user...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path={routes.LOGIN}
                element={
                  <RestrictedRoute redirectTo="/" component={<LoginPage />} />
                }
              />
              <Route
                path={routes.SIGNUP}
                element={
                  <RestrictedRoute
                    redirectTo="/"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute redirectTo="/login" component={<AdminPage />} />
                }
              />
              <Route
                path="/user"
                element={
                  <PrivateRoute redirectTo="/login" component={<UserPage />} />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        )}
      </ThemeProvider>
    </Container>
  );
}

export default App;
