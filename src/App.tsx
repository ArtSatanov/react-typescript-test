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

function App() {
  return (
    <div>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
