import { ItemList } from '../../components/ItemsList/ItemList';
import { useAuth } from '../../services/redux/Selectors/selectors';
import { AdminPage } from '../Admin/AdminPage';
import { Navigate } from 'react-router-dom';

const USER_ROLE_ADMIN = 'admin';
const USER_ROLE_USER = 'user';

const Home = () => {
  const { isLoggedIn, token, isAdmin } = useAuth();

  return (
    <div>
      {isLoggedIn && isAdmin && <Navigate to={'/admin'} />}
      {isLoggedIn && !isAdmin && <Navigate to={'/user'} />}
      {!isLoggedIn && !token && <ItemList />}
    </div>
  );
};

export default Home;
