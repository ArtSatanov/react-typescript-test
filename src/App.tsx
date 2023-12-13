import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { routes } from './const/routes';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.SIGNUP} element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
