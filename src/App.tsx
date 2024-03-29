import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { routes } from './const/routes';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './services/redux/store';
import { lazy, useEffect } from 'react';
import { useAuth } from './services/redux/selectors/selectors';
import { refreshUser } from './services/redux/operations/operations';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const UserPage = lazy(() => import('pages/User/UserPage'));
const AdminPage = lazy(() => import('pages/Admin/AdminPage'));

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
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing ? (
        <>
          <Loader />
        </>
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
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
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
    </Container>
  );
}

export default App;
